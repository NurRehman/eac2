'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'apps/overview/overview_item_view'
], function ($, _, Backbone, ItemView) {

  describe('ItemView', function () {
    beforeEach(function () {
      this.model = new Backbone.Model({
        id: '1'
      });
      this.view = new ItemView({model: this.model});
      this.view.render();
    });

    it('render() should return the view object', function () {
      expect(this.view.render()).to.equal(this.view);
    });
  });
});
