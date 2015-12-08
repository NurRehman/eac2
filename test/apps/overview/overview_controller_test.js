'use strict';

define([
  'marionette',
  'apps/overview/overview_controller'
], function (Marionette, OverviewController) {

  describe('OverviewController', function() {
    beforeEach(function() {
      this.region = new Marionette.Region({el: 'body'});
      this.controller = new OverviewController({region: this.region});
    });

    it('region should be ok', function() {
      expect(this.region).to.equal(this.controller.region);
    });

    it.skip('default method should render view', function() {
      throw new Error('default method not implemented yet');
    });
  });
});
