'use strict';

define([
  'apps/overview/overview_menu_collection'
], function (OverviewMenuCollection) {
  describe('OverviewMenuCollection', function () {
    it('has default values', function () {
      var collection = new OverviewMenuCollection();
      expect(collection).to.be.ok;
    });
  });
});
