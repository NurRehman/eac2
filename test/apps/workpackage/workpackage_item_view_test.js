'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'apps/workpackage/workpackage_item_view'
], function ($, _, Backbone, WorkpackageItemView) {

  describe('WorkpackageItemView', function () {
    beforeEach(function () {
      this.model = new Backbone.Model({
        id: '1'
      });
      this.view = new WorkpackageItemView({model: this.model});
      this.view.render();
    });

    it('render() should return the view object', function () {
      expect(this.view.render()).to.equal(this.view);
    });
  });
});
