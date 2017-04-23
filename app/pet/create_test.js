'use strict';

describe('myApp.createPet module', function() {

  beforeEach(module('myApp.createPet'));

  describe('createPet controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var createPetCtrl = $controller('PetCreateCtrl');
      expect(createPetCtrl).toBeDefined();
    }));

  });
});
