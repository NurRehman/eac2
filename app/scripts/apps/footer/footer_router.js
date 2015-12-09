'use strict';

define([
  'marionette', './footer_controller'
], function(Marionette, FooterController) {

  return Marionette.AppRouter.extend({
    initialize: function(options) {
      this.controller = new FooterController({region: options.region});
    },
    appRoutes: {
      'footer': 'default'
    }
  });
});
