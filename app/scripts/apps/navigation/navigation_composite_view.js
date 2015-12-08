'use strict';

define([
  'marionette',
  'templates',
  'apps/navigation/navigation_item_view'
], function (Marionette, JST, NavigationItemView) {

  return Marionette.CompositeView.extend({
    tagName: 'div',
    template: JST['app/scripts/apps/navigation/navigation_composite_view_template.hbs'],
    childView: NavigationItemView,
    childViewContainer: '#lang',
    events: {
    	'click a.nav-link': 'showHeading'	
    },

   showHeading: function(e){
    	//e.preventDefault();
    	var linkText = $(e.target).text();
    	$('#main-heading-container').text(linkText);
    }

  });
});
