'use strict';

define(['backbone', 'marionette', 'i18n', './navigation_composite_view', './navigation_collection', './navigation_tab_item_view'],
  function (Backbone, Marionette, i18n, NavigationItemView, NavigationCollection, NavigationTabView) {
    return Marionette.Object.extend({
        initialize: function(options) {
            this.region = options.region;
            this.show();

        },
        show: function () {
            /*var collection = new NavigationCollection();
            collection.fetch();*/
            var view = new NavigationItemView();
            /*view.listenTo(view, 'childview:language:click', function(data) {
              i18n.setLng(data.model.get('key'), function() {
                Backbone.history.loadUrl(Backbone.history.fragment);
                view.render();
              });
            });*/
            this.region.navReg.show(view);
            this.region.tabReg.show(new NavigationTabView());

        }
    });
});
