'use strict';

define([
  'backbone',
  'apps/workpackage/workpackage_composite_view'
], function (Backbone, WorkpackageCompositeView) {
  describe('ApplesCompositeView', function () {

    beforeEach(function () {
      this.collection = new Backbone.Collection([
        {id: 1, name: 'joe doe'},
        {id: 2, name: 'bigus doeus'}
      ]);

      this.view = new WorkpackageCompositeView ({collection: this.collection});
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
