'use strict';
define([
    'backbone',
    'marionette',
    'fastclick',
    'helpers/handlebars_helpers',
    'apps/main/main_layout_view',
    'apps/navigation/navigation_controller',
    'apps/sidebar/sidebar_controller',
    'apps/footer/footer_controller',
    'apps/overview/overview_router',
    'apps/workpackage/workpackage_router',
], function (Backbone, Marionette, Fastclick, helpers, MainLayoutView, NavigationController, SidebarController, FooterController,  OverviewRouter, WorkpackageRouter) {
    helpers.initialize();
    var App = new Marionette.Application();
    var initializeUI = function () {
        var rootView = new MainLayoutView();
        rootView.render();
        new NavigationController({
            region: rootView.navigationRegion
        });
        new SidebarController({
            region: rootView.sidebarRegion
        });
        new OverviewRouter({
            region: {
                sidebarReg: rootView.sidebarRegion,
                contentReg: rootView.contentRegion,
                menuBtnReg: rootView.menuBtnsRegion,
                fullContentReg: rootView.fullContentRegion,
                descriptionReg: rootView.descriptionRegion,
                
            }
        });
        new WorkpackageRouter({
            region: {
                fullContentReg: rootView.fullContentRegion,
                sidebarReg: rootView.sidebarRegion,
                contentReg: rootView.contentRegion,
                menuBtnReg: rootView.menuBtnsRegion,
                descriptionReg: rootView.descriptionRegion,
                
            }
        });
        new FooterController({
            region: rootView.footerRegion
        });
    };
    App.on('start', function () {
        initializeUI();
        Fastclick.attach(document.body);
        if (Backbone.history) {
            Backbone.history.start();
        }
    });
    return App;
});
