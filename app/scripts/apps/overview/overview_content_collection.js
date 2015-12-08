'use strict';

define([
    'backbone',
], function (Backbone) {
    return Backbone.Collection.extend({
        url: 'jsondata/overview-content-collection.json',
        defaults: {
        }
    });
});
