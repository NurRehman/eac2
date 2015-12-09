'use strict';

define([
  'apps/footer/footer_model'
], function (FooterModel) {
  describe('FooterModel', function () {
    it('has default values', function () {
      // Create empty note model.
      var model = new FooterModel();
      expect(model).to.be.ok;
    });
  });
});
