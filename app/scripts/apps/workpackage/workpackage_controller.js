'use strict';

define(['marionette',  'apps/workpackage/workpackage_item_view', 'apps/workpackage/workpackage_button_item_view'], function (Marionette, WorkpackageItemView, WorkpackageBtnView) {

  return Marionette.Object.extend({
    initialize: function (options) {
      this.region = options.region;

      var wpbtntpl = new WorkpackageBtnView();
      this.region.menuBtnReg.show(wpbtntpl);

     
      
      //this.showWorkPackageContents();
      this.region.contentReg.empty();
      //this.region.menuBtnReg.empty();
      this.region.sidebarReg.empty();
    },

    workPackageContents1: function() {
      

      var workpackageItemView = new WorkpackageItemView();
      this.region.fullContentReg.show(workpackageItemView);
      this.initialize(this);

      
      
    }
  });
});
