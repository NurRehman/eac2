'use strict';

define(['marionette', 'templates'], function (Marionette, JST) {

    return Marionette.LayoutView.extend({
        template: JST['app/scripts/apps/main/main_layout_view_template.hbs'],
        regions: {
            'navigationRegion': '#navigation',
            'menuBtnsRegion': '#menu-buttons',
            'sidebarRegion': '#sidebar',
            'contentRegion': '#content',
            'fullContentRegion': '#fullcontent',
            'footerRegion': '#footer-region'
        },
        el: '#wrapper'
    });
});
