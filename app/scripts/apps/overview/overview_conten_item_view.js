'use strict';

define(['marionette', 'templates'], function (Marionette, JST) {

  return Marionette.ItemView.extend({
  	//tagName: 'tbody',
    template: JST['app/scripts/apps/overview/overview_content_item_view_template.hbs'],
    onRender: function () {
        // Get rid of that pesky wrapping-div.
        // Assumes 1 child element present in template.
        this.$el = this.$el.children();
        // Unwrap the element to prevent infinitely 
        // nesting elements during re-render.
        this.$el.unwrap();
        this.setElement(this.$el);
    }
  });
});
