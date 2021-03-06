'use strict';

define([
  'backbone',
  'apps/footer/footer_composite_view'
], function (Backbone, FooterCompositeView) {
  describe('ApplesCompositeView', function () {

    beforeEach(function () {
      this.collection = new Backbone.Collection([
        {id: 1, name: 'joe doe'},
        {id: 2, name: 'bigus doeus'}
      ]);

      this.view = new FooterCompositeView ({collection: this.collection});
      this.view.render();
    });

    it('Render() should return the view object', function () {
      expect(this.view.render()).to.equal(this.view);
    });

    it('should render 2 items', function () {
      expect(this.view.render().$el.find('#itemView').children().length).to.equal(2);
    });
  });
});
