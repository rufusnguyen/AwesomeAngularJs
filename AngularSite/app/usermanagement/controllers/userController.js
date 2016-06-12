'use strict';
define(['app'], function (app) {
    var injectParams = ['$scope','usersService'];
    var UserManagement = function ($scope, usersService) {

        var vm = $scope;

        function init() {
            usersService.getAll().then(function (result) {
                vm.users = result;
            });
        }

        init();
    }

    UserManagement.$inject = injectParams;
    app.controller('UserManagement', UserManagement);
});