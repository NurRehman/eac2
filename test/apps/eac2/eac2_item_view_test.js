'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'helpers/handlebars_helpers',
  'apps/eac2/eac2_item_view'
], function ($, _, Backbone, helpers, Eac2ItemView) {
  helpers.initialize();

  describe('Eac2ItemView', function () {
    beforeEach(function () {
      this.model = new Backbone.Model({
        text: 'Sample'
      });
      this.view = new Eac2ItemView({model: this.model});
      this.view.render();

      this.eventSpy = sinon.spy();
      this.view.listenTo(this.view, 'eac2:showDetail', this.eventSpy);
    });

    it('render() should return the view object', function () {
      expect(this.view.render()).to.equal(this.view);
    });

    it('name should equal Sample', function () {
      expect(this.view.render().$('.text').text()).to.equal('Sample');
    });

    it('click event should trigger spy', function() {
      this.view.$el.find('button.edit').trigger('click');
      expect(this.eventSpy.callCount).to.equal(1);
    });
  });
});
