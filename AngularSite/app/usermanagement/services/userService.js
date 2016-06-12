'use strict';
define(['app'], function (app) {
    var injectParams = ['$http', '$q'];
    var userFactory = function ($http, $q) {
        var baseUrl = '/api/user/',
            factory = {};

        factory.getAll = function () {
            return $http.get(baseUrl + 'getusers').then(function (result) {
                return result.data;
            });
        };

        factory.add = function (newUser) {

            var req = {
                method: 'POST',
                url: baseUrl + 'addUser',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: newUser
            };

            return $http(req).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                return response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(response);
            });
        };

        return factory;
    };

    userFactory.$inject = injectParams;
    app.factory('usersService', userFactory);
});