'use strict';

define([
  'marionette',
  'templates',
  'apps/overview/overview_conten_item_view'
], function (Marionette, JST, OverviewContentItemView) {

  return Marionette.CompositeView.extend({
  	tagName: 'div',
    template: JST['app/scripts/apps/overview/overview_composite_view_template.hbs'],
    childView: OverviewContentItemView,
    childViewContainer: '#overview-table-body',
  });
});
