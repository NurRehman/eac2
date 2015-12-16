'use strict';

define([
    'backbone',
], function (Backbone) {
    return Backbone.Collection.extend({
        url: 'jsondata/menu-nodes.json',
        defaults: {
        }
    });
});
