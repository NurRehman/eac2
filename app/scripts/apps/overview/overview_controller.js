'use strict';

define(['marionette', 'apps/overview/overview_model', 'apps/overview/overview_collection','apps/overview/overview_menu_collection', 'apps/overview/overview_menu_composite_view', 'apps/overview/overview_composite_view', 'apps/overview/overview_conten_item_view', 'apps/overview/overview_button_item_view', 'apps/overview/overview_content_collection'], function (Marionette, Model, Collection, MenuCollection, MenuCompositeView, OverviewCompositeView, ContenTemplate, OverviewBtnTemplate, OverviewContentCollection) {
  return Marionette.Object.extend({
    initialize: function (options) {
      this.region = options.region;
      //console.log('initialize overview');

      var mcollection = new MenuCollection();
      mcollection.fetch();
      var menucview = new MenuCompositeView({collection: mcollection});
      this.region.sidebarReg.show(menucview);

      var overviewbtntpl = new OverviewBtnTemplate();
      this.region.menuBtnReg.show(overviewbtntpl);
      
      this.region.fullContentReg.empty();
      this.region.descriptionReg.empty();
    },

    default: function() {
      //var model = new Model();
      //var collection = new Collection();
      var overviewCompositeView = new OverviewCompositeView();
      this.region.contentReg.show(overviewCompositeView);

     this.initialize(this);

      //console.log('default function overview');

    },
    menu1content: function() {
      //var model = new Model();
      var contentcollection = new OverviewContentCollection();
      contentcollection.fetch();
      //console.log(contentcollection);
      var overviewCompositeViewBody = new OverviewCompositeView({collection: contentcollection});
      this.region.contentReg.show(overviewCompositeViewBody);
      //this.region.contentReg.show(new ContenTemplate());
      //this.region.sidebarReg.hide();
      this.initialize(this);

    },
    menu2content: function() {
      this.region.contentReg.show(new ContenTemplate());      
    }
  });
});
