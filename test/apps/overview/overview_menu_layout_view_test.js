'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'apps/overview/overview_menu_layout_view'
], function ($, _, Backbone, OverviewMenuLayoutView) {

  describe('OverviewMenuLayoutView view', function () {
    beforeEach(function () {
      this.view = new OverviewMenuLayoutView();
      this.view.render();
    });
    it('render() should return the view object', function () {
      expect(this.view.render()).to.equal(this.view);
    });

    it('should contain 2 regions', function () {
      expect(this.view.render().$el.find('div').length).to.equal(2);
    });
  });
});
