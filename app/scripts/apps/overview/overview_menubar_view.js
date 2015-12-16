'use strict';

define(['marionette', 'templates'], function (Marionette, JST) {

  return Marionette.ItemView.extend({
    //tagName: 'a',
    template: JST['app/scripts/apps/overview/overview_menubar_template.hbs'],
     
  });
});
