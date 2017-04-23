'use strict';

angular.module('myApp.listPet', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pets', {
    templateUrl: 'pet/list.html',
    controller: 'PetListCtrl'
  });
}])
.controller('PetListCtrl', function($scope, petsFactory) {
  $scope.heading = 'Does my pet need an umbrella?';
  $scope.subheading = 'Select a pet to find out.';
  $scope.isLoading = true;
  $scope.displayBy = 'card';
  $scope.search = '';

  $scope.getAllPets = function() {
    petsFactory.getAll().then(function(pets) {
      $scope.isLoading = false;
      $scope.pets = pets.data;
    }, function(err) {
      $scope.isLoading = false;
      throw err;
    });
  }

  $scope.destroy = function(pet) {
    petsFactory.destroy(pet.id).then(function(pet) {
      var index = $scope.pets.indexOf(pet);
      $scope.pets.splice(index, 1);
    }, function(err) {
      alertify.error(err);
    });
  }

  $scope.getAllPets();
});
