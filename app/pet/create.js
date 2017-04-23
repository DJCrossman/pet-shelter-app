'use strict';

angular.module('myApp.createPet', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pets/new', {
    templateUrl: 'pet/create.html',
    controller: 'PetCreateCtrl'
  });
}])
.controller('PetCreateCtrl', function($scope, petsFactory) {
  $scope.heading = 'Add your pet';
  $scope.pet = {};

  $scope.autocomplete = new google.maps.places.Autocomplete(angular.element('#location')[0]);

  petsFactory.getTypes().then(function(types) {
    angular.element('#typeName').select2({
      data: types.map(t => { return {id: t.name, text: t.name}; }),
      placeholder: 'Select a type of pet...'
    });
  }, function(err) {
    alertify.error(err);
  });
  $scope.addMyPet = function addMyPet(pet) {
    if(!!pet.location) {
      pet.lat = $scope.autocomplete.getPlace().geometry.location.lat();
      pet.long = $scope.autocomplete.getPlace().geometry.location.lng();
    }
    if(!!pet.name && !!pet.typeName && !!pet.breedName &&
      !!pet.location && !!pet.lat && !!pet.long) {
      toggleButtons('loading');
      petsFactory.create(pet).then(() => {
        toggleButtons('reset');
        window.location.href = '/';
      }).catch((err) => {
        toggleButtons('reset');
        alertify.error(err);
      });
      $scope.pet = {};
    } else {
      alertify.warning('Your pet is not valid!');
    }
  };
  function toggleButtons(options) {
    angular.element('#x-cancel').toggle();
    angular.element('#x-save').button(options);
  }
});
