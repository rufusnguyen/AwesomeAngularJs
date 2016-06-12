'use strict';
define(['app'], function (app) {
    var injectParams = ['$rootScope', '$scope'];
    var GeneralPageController = function ($rootScope, $scope) {
       // initialize core components
       App.initAjax();
        

        // set sidebar closed and body solid layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    };

    GeneralPageController.$inject = injectParams;
    app.controller('GeneralPageController', GeneralPageController);
});