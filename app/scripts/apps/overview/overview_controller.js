'use strict';

define(['marionette','backbone', 'backtree', 'apps/overview/overview_model', 'apps/overview/overview_collection','apps/overview/overview_menu_collection', 'apps/overview/overview_menu_composite_view', 'apps/overview/overview_composite_view', 'apps/overview/overview_conten_item_view', 'apps/overview/overview_button_item_view', 'apps/overview/overview_content_collection', 'apps/overview/overview_menubar_collection','apps/overview/overview_menubar_view', 'backbone-tree-model'], 
  function (Marionette, Backbone, BackTree,  Model, Collection, MenuCollection, MenuCompositeView, OverviewCompositeView, ContenTemplate, OverviewBtnTemplate, OverviewContentCollection, MenubarCollection, MenubarView) {
  return Marionette.Object.extend({
    initialize: function (options) {
      this.region = options.region;
      //console.log('initialize overview');
      var mcollection = new MenuCollection();
      mcollection.fetch();

      var data = new BackTree.Collection(mcollection);
      console.log(data);

      var tree = new BackTree.Tree({
        collection : data
      });
      var mbview = new MenubarView();
       $('#tree').append(tree.render().$el);
      console.log(tree.render()); 
      this.region.sidebarReg.show(mbview);
     /* var mcollection = new MenuCollection();
      mcollection.fetch();
      var menucview = new MenuCompositeView({collection: mcollection});
      this.region.sidebarReg.show(menucview);
*/
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
