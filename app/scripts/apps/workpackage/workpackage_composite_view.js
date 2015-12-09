'use strict';

define([
  'marionette',
  'templates',
  'apps/workpackage/workpackage_item_view'
], function (Marionette, JST, WorkpackageItemView) {

  return Marionette.CompositeView.extend({
    tagName: 'div',
    template: JST['app/scripts/apps/workpackage/workpackage_composite_view_template.hbs'],
    childView: WorkpackageItemView,
    childViewContainer: '#itemView'
  });
});
