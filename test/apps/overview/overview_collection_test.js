'use strict';

define([
  'apps/overview/overview_collection'
], function (OverviewCollection) {
  describe('OverviewCollection', function () {
    it('has default values', function () {
      var collection = new OverviewCollection();
      expect(collection).to.be.ok;
    });
  });
});
