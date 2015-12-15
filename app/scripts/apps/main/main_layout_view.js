'use strict';

define(['marionette', 'templates'], function (Marionette, JST) {

    return Marionette.LayoutView.extend({
        template: JST['app/scripts/apps/main/main_layout_view_template.hbs'],
        regions: {
            'navigationRegion': '#navigation',
            'menuBtnsRegion': '#menubuttons',
            'sidebarRegion': '#sidebar',
            'contentRegion': '#content',
            'fullContentRegion': '#fullcontent',
            'footerRegion': '#footer-region',
            'tabRegion': '#tabs-area',
            'descriptionRegion': '#descriptionbox',
            
        },
        el: '#wrapper'
    });
});
