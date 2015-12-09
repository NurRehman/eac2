'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'apps/footer/footer_item_view'
], function ($, _, Backbone, FooterItemView) {

  describe('FooterItemView', function () {
    beforeEach(function () {
      this.model = new Backbone.Model({
        id: '1'
      });
      this.view = new FooterItemView({model: this.model});
      this.view.render();
    });

    it('render() should return the view object', function () {
      expect(this.view.render()).to.equal(this.view);
    });
  });
});
