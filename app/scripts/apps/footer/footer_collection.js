'use strict';

define([
    'backbone',
    './footer_model'
], function (Backbone, FooterModel) {
    return Backbone.Collection.extend({
        model: FooterModel,
        url: 'jsondata/items-collection.json',
        defaults: {
        }
    });
});
