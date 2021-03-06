'use strict';

define([
  'backbone',
  'marionette',
  'helpers/handlebars_helpers',
  'apps/home/home_controller'
], function (Backbone, Marionette, helpers, HomeController) {
  helpers.initialize();

  describe('HomeController', function () {
    beforeEach(function () {
      this.region = new Marionette.Region({el: 'body'});
      this.controller = new HomeController({region: this.region});
    });

    it('should render view', function () {
      this.controller.default();
      expect(this.region.$el.find('h2')).to.be.ok;
      expect(this.region.$el.find('h2').text()).to.equal('Home');
    });
  });
});
