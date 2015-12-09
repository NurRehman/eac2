'use strict';

define(['marionette', 'apps/footer/footer_item_view'], function (Marionette,FooterItemView) {

  return Marionette.Object.extend({
    initialize: function (options) {
      this.region = options.region;
      this.showFooter();
    },

    showFooter: function() {
      var footerItemView = new FooterItemView();
      this.region.show(footerItemView);
    }
  });
});
