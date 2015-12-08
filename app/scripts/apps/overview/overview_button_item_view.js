'use strict';

define(['marionette', 'templates'], function (Marionette, JST) {

  return Marionette.ItemView.extend({
    template: JST['app/scripts/apps/overview/overview_buttons_item_view_template.hbs']
  });
});
