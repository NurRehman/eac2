'use strict';

define([
    'backbone',
], function (Backbone) {
    return Backbone.Collection.extend({
        url: 'jsondata/menu-simple-items.json',
        defaults: {
        }
    });
});
