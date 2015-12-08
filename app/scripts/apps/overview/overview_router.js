'use strict';

define([
  'marionette', './overview_controller'
], function(Marionette, OverviewController) {

  return Marionette.AppRouter.extend({
    initialize: function(options) {
      this.controller = new OverviewController({region: options.region});
    },
    appRoutes: {
      'overview': 'default',
      'overview/menu1': 'menu1content',
      'overview/menu2': 'menu2content',

    }
  });
});
