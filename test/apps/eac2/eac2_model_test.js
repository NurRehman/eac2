'use strict';

define([
  'apps/eac2/eac2_model'
], function (Model) {
  describe('Model', function () {
    it('has default values', function () {
      // Create empty note model.
      var model = new Model();
      expect(model).to.be.ok;
    });
  });
});
