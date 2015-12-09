'use strict';

define([
    'backbone',
    './workpackage_model'
], function (Backbone, WorkpackageModel) {
    return Backbone.Collection.extend({
        model: WorkpackageModel,
        url: 'jsondata/items-collection.json',
        defaults: {
        }
    });
});
