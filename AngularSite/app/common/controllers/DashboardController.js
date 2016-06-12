'use strict';
define(['app'], function (app) {
    var injectParams = ['$rootScope', '$scope', '$http', '$timeout'];
    var ArchivedObstacleController = function ($rootScope, $scope, $http, $timeout) {
        $scope.$on('$viewContentLoaded', function () {
            // initialize core components
            App.initAjax();
        });

        // set sidebar closed and body solid layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    };

    ArchivedObstacleController.$inject = injectParams;
    app.controller('DashboardController', ArchivedObstacleController);
});