'use strict';

angular.module('myApp.detailsPet', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pets/:id', {
    templateUrl: 'pet/details.html',
    controller: 'PetDetailsCtrl'
  });
}])

.controller('PetDetailsCtrl', [function(id) {

}]);
