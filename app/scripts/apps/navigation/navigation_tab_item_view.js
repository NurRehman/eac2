'use strict';

define(['marionette', 'templates'], function (Marionette, JST) {
  return Marionette.ItemView.extend({
    //tagName: 'li',
    template: JST['app/scripts/apps/navigation/navigation_tab_template.hbs'],
  });

});
