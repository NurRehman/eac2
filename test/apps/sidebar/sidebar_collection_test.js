'use strict';

define([
  'apps/sidebar/sidebar_collection'
], function (SidebarCollection) {
  describe('SidebarCollection', function () {
    it('has default values', function () {
      var collection = new SidebarCollection();
      expect(collection).to.be.ok;
    });
  });
});
