'use strict';

define([
  'marionette', './workpackage_controller'
], function(Marionette, WorkpackageController) {

  return Marionette.AppRouter.extend({
    initialize: function(options) {
      this.controller = new WorkpackageController({region: options.region});
    },
    appRoutes: {
      'wp1': 'workPackageContents1'
    }
  });
});
