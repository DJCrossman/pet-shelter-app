'use strict';

describe('myApp.detailsPet module', function() {

  beforeEach(module('myApp.detailsPet'));

  describe('detailsPet controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var detailsPetCtrl = $controller('PetDetailsCtrl');
      expect(detailsPetCtrl).toBeDefined();
    }));

  });
});
