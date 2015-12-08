'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'helpers/handlebars_helpers',
  'apps/eac2/eac2_create_item_view'
], function ($, _, Backbone, helpers, Eac2CreateItemView) {

  helpers.initialize();

  describe('Eac2CreateItemView', function () {
    beforeEach(function () {
      this.date = Date.now();

      this.model = new Backbone.Model({});

      this.view = new Eac2CreateItemView({model: this.model});
      this.view.render();

      this.eventSpy = sinon.spy();
      this.view.listenTo(this.view, 'eac2:createItem', this.eventSpy);
    });

    it('render() should return the view object', function () {
      expect(this.view.render()).to.equal(this.view);
    });

    it('text are should render', function () {
      expect(this.view.render().$('textarea#text')).not.to.equal(null);
    });

    it('author should be of type text', function () {
      expect(this.view.render().$('#author')).not.to.equal(null);
      expect(this.view.render().$('#author').attr('type')).to.equal('text');
    });

    it('created should be of type text', function () {
      expect(this.view.render().$('#created')).not.to.equal(null);
      expect(this.view.render().$('#created').attr('type')).to.equal('text');
    });

    it('click event should trigger spy', function() {
      this.view.$el.find('button.create').trigger('click');
      expect(this.eventSpy.callCount).to.equal(1);
    });

  });
});
