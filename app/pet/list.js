'use strict';

angular.module('myApp.listPet', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pets', {
    templateUrl: 'pet/list.html',
    controller: 'PetListCtrl'
  });
}])

.controller('PetListCtrl', [function(id) {
  console.log('Boom');
}]);
