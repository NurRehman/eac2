'use strict';

define(['marionette', './home_item_view', './home_model'], function (Marionette, HomeItemView, HomeModel) {
    return Marionette.Object.extend({
        initialize: function (options) {
            this.region = options.region;
        },
        default: function () {
            var model = new HomeModel({name: 'Home'});
            var view = new HomeItemView({model: model});
            this.region.show(view);
        }
    });
});
