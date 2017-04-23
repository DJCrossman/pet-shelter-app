'use strict';

angular.module('myApp.detailsPet', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pets/:id', {
    templateUrl: 'pet/details.html',
    controller: 'PetDetailsCtrl'
  });
}])
.controller('PetDetailsCtrl', function($scope, $routeParams, petsFactory, forecastFactory) {
  $scope.isLoading = true;
  $scope.heading = function heading() {
    if(typeof $scope.isRaining === 'undefined') return '';
    return $scope.isRaining ? 'Yes' : 'Nope';
  };
  $scope.message = function message() {
    if(!$scope.pet) return '';
    return `It looks like ${$scope.pet.name} is ${$scope.isRaining ? '' : 'not '}going to need one in ${$scope.pet.location}.`;
  };
  petsFactory.get($routeParams.id).then(function(pet) {
    $scope.pet = pet.data;
    forecastFactory.get($scope.pet.lat, $scope.pet.long).then(function(forecast) {
      $scope.isLoading = false;
      $scope.isRaining = forecast.data.currently.icon === 'rain';
    }, function(err) {
      $scope.isLoading = false;
      throw err;
    });
  });
});
