'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'helpers/handlebars_helpers',
  'apps/navigation/navigation_item_view'
], function ($, _, Backbone, helpers, NavigationItemView) {
  helpers.initialize();

  describe('NavigationItemView', function () {
    beforeEach(function () {
      this.model = new Backbone.Model({
        text: 'English'
      });
      this.view = new NavigationItemView({model: this.model});
      this.view.render();
    });
    it('id should equal 1', function () {
      expect(this.view.$('a').text()).to.equal('English');
    });
  });
});
