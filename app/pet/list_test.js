'use strict';

describe('myApp.listPet module', function() {

  beforeEach(module('myApp.listPet'));

  describe('listPet controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var listPetCtrl = $controller('PetListCtrl');
      expect(listPetCtrl).toBeDefined();
    }));

  });
});
