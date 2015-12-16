'use strict';

define([
  'marionette',
  'templates',
  'apps/overview/overview_menubar_view'
], function (Marionette, JST, MenubarView) {

  return Marionette.CompositeView.extend({
    tagName: 'div',
    className: 'text-primary',
    template: JST['app/scripts/apps/overview/overview_menubar_composite_view_template.hbs'],
    childView: MenubarView,
    childViewContainer: '#tree',
    /*events: {
      'click label.tree-toggler': 'showMenuChildren' 
    },

   showMenuChildren: function(e){
      //e.preventDefault();
      e.stopPropagation();
      var childText = $(e.target).text();
      console.log(childText + '= childText');
      //$('#main-heading-container').text(linkText);
      $(childText).dropdown(300);
    }*/
  });
});
