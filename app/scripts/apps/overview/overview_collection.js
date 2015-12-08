'use strict';

define([
    'backbone',
    './overview_model'
], function (Backbone, OverviewModel) {
    return Backbone.Collection.extend({
        model: OverviewModel,
        url: 'jsondata/items-collection.json',
        defaults: {
        }
    });
});
