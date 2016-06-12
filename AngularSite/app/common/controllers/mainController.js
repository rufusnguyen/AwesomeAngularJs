'use strict';
define(['app'], function (app) {
    var injectParams = ['$scope', '$rootScope'];
    var ArchivedObstacleController = function ($scope, $rootScope) {
        $scope.$on('$viewContentLoaded', function () {
            //App.initComponents();
            //Layout.init();
        });
    };

    ArchivedObstacleController.$inject = injectParams;
    app.controller('MainController', ArchivedObstacleController);
});