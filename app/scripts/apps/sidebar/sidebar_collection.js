'use strict';

define([
    'backbone',
    './sidebar_model'
], function (Backbone, SidebarModel) {
    return Backbone.Collection.extend({
        model: SidebarModel
    });
});
