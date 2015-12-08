'use strict';

define([
  'apps/overview/overview_model'
], function (OverviewModel) {
  describe('OverviewModel', function () {
    it('has default values', function () {
      // Create empty note model.
      var model = new OverviewModel();
      expect(model).to.be.ok;
    });
  });
});
