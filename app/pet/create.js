'use strict';

angular.module('myApp.createPet', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/new', {
    templateUrl: 'pet/create.html',
    controller: 'PetCreateCtrl'
  });
}])

.controller('PetCreateCtrl', [function() {

}]);
