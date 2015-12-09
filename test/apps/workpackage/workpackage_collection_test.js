'use strict';

define([
  'apps/workpackage/workpackage_collection'
], function (WorkpackageCollection) {
  describe('WorkpackageCollection', function () {
    it('has default values', function () {
      var collection = new WorkpackageCollection();
      expect(collection).to.be.ok;
    });
  });
});
