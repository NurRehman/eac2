'use strict';

define([
  'marionette',
  'templates',
  'apps/footer/footer_item_view'
], function (Marionette, JST, FooterItemView) {

  return Marionette.CompositeView.extend({
    tagName: 'div',
    template: JST['app/scripts/apps/footer/footer_composite_view_template.hbs'],
    childView: FooterItemView,
    childViewContainer: '#itemView'
  });
});
