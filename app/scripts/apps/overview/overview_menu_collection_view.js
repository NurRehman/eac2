'use strict';

define([
    'backbone','marionette','./overview_menu_composite_view'
], function (Backbone, Marionette, MenuCompositeView) {
    return Marionette.CollectionView.extend({
       childView: MenuCompositeView,
    });
});
