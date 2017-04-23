(function () {
  'use strict';

  var ForecastAPI = 'https://crossorigin.me/https://api.darksky.net/forecast';
  var SECRET_KEY = 'a6801e5f483f73ded1f064aa1b7df331';

  angular.module('myApp')
  .factory('forecastFactory', function($http) {
    return {
      get: function(lat, long) {
        return $http.get(`${ForecastAPI}/${SECRET_KEY}/${lat},${long}`);
      }
    }
  })
})();
