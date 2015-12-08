'use strict';

define([
  'apps/sidebar/sidebar_model'
], function (SidebarModel) {
  describe('SidebarModel', function () {
    it('has default values', function () {
      // Create empty note model.
      var model = new SidebarModel();
      expect(model).to.be.ok;
    });
  });
});
