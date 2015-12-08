'use strict';

define([
  'apps/overview/overview_menu_model'
], function (OverviewMenuModel) {
  describe('OverviewMenuModel', function () {
    it('has default values', function () {
      // Create empty note model.
      var model = new OverviewMenuModel();
      expect(model).to.be.ok;
    });
  });
});
