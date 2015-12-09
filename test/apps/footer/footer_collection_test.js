'use strict';

define([
  'apps/footer/footer_collection'
], function (FooterCollection) {
  describe('FooterCollection', function () {
    it('has default values', function () {
      var collection = new FooterCollection();
      expect(collection).to.be.ok;
    });
  });
});
