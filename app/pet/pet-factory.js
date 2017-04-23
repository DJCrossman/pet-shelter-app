(function () {
  'use strict';

  var PetShelterAPI = 'https://pet-shelter-services.herokuapp.com';
  var PetTypes = [
    {"id":"1","name":"Bearded Dragon"},{"id":"2","name":"Bird"},
    {"id":"3","name":"Burro"},{"id":"4","name":"Cat"},
    {"id":"5","name":"Chameleon"},{"id":"6","name":"Chicken"},
    {"id":"7","name":"Chinchilla"},{"id":"8","name":"Chinese Water Dragon"},
    {"id":"9","name":"Cow"},{"id":"10","name":"Dog"},
    {"id":"11","name":"Donkey"},{"id":"12","name":"Duck"},
    {"id":"13","name":"Ferret"},{"id":"14","name":"Fish"},
    {"id":"15","name":"Gecko"},{"id":"16","name":"Goose"},
    {"id":"17","name":"Gerbil"},{"id":"18","name":"Goat"},
    {"id":"19","name":"Guinea Fowl"},{"id":"20","name":"Guinea Pig"},
    {"id":"21","name":"Hamster"},{"id":"22","name":"Horse"},
    {"id":"23","name":"Iguana"},{"id":"24","name":"Llama"},
    {"id":"25","name":"Lizard"},{"id":"26","name":"Mice"},
    {"id":"27","name":"Mule"},{"id":"28","name":"Peafowl"},
    {"id":"29","name":"Pig or Hog"},{"id":"30","name":"Pigeon"},
    {"id":"31","name":"Ponie"},{"id":"32","name":"Pot Bellied Pig"},
    {"id":"33","name":"Rabbit"},{"id":"34","name":"Rat"},
    {"id":"35","name":"Sheep"},{"id":"36","name":"Skink"},
    {"id":"37","name":"Snake"},{"id":"38","name":"Stick Insect"},
    {"id":"39","name":"Sugar Glider"},{"id":"40","name":"Tarantula"},
    {"id":"41","name":"Turkey"},{"id":"42","name":"Turtle"}
  ];

  angular.module('myApp')
  .factory('petsFactory', function($http) {
    return {
      create: function(pet) {
        return $http.post(`${PetShelterAPI}/pets`, pet);
      },
      get: function(id) {
        return $http.get(`${PetShelterAPI}/pets/${id}`);
      },
      getAll: function(){
         return $http.get(`${PetShelterAPI}/pets`);
      },
      update: function(pet ){
        return $http.put(`${PetShelterAPI}/pets/${pet.id}`, pet);
      },
      destroy: function(id) {
        return $http.delete(`${PetShelterAPI}/pets/${id}`);
      },
      getTypes: function() {
        return new Promise(function(resolve, reject) {
          resolve(PetTypes);
        });
      }
    }
  })
})();
