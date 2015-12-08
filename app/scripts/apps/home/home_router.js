'use strict';

define([
  'backbone', 'marionette', './home_controller'
], function(Backbone, Marionette, HomeController) {

  return Marionette.AppRouter.extend({
    initialize: function(options) {
        this.controller = new HomeController({region: options.region});
    },

    appRoutes: {
      '*path': 'default'
    }

  });
});
