'use strict';

define([
  'apps/workpackage/workpackage_model'
], function (WorkpackageModel) {
  describe('WorkpackageModel', function () {
    it('has default values', function () {
      // Create empty note model.
      var model = new WorkpackageModel();
      expect(model).to.be.ok;
    });
  });
});
