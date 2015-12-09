'use strict';

define([
  'marionette',
  'apps/workpackage/workpackage_controller'
], function (Marionette, WorkpackageController) {

  describe('WorkpackageController', function() {
    beforeEach(function() {
      this.region = new Marionette.Region({el: 'body'});
      this.controller = new WorkpackageController({region: this.region});
    });

    it('region should be ok', function() {
      expect(this.region).to.equal(this.controller.region);
    });

    it.skip('default method should render view', function() {
      throw new Error('default method not implemented yet');
    });
  });
});
