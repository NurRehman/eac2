'use strict';

define(['marionette', 'templates', 'apps/workpackage/workpackage_create_labour_item_view'], function (Marionette, JST, WorkpackageDialogView) {

  return Marionette.ItemView.extend({
    template: JST['app/scripts/apps/workpackage/workpackage_button_item_view.hbs'],
    events: {
    	'click #model-show' : 'showModel'
    },

    showModel: function(){
    	var dailogview = new WorkpackageDialogView();
      	dailogview.render();
    	var modelEl = $('#create-model');
	      modelEl.html(dailogview.el);
	      modelEl.modal();

    }

  });
});
