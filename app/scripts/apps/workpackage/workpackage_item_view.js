'use strict';

define(['marionette', 'templates'], function (Marionette, JST) {

  return Marionette.ItemView.extend({
    template: JST['app/scripts/apps/workpackage/workpackage_item_view_template.hbs']
  });
});
