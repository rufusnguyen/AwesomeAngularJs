require.config({
    baseUrl: 'app',
    urlArgs: 'v=1.0',
    waitSeconds: 30
});

require(
    [
        'app',
        'common/controllers/mainController',
        'common/controllers/DashboardController',
        'common/directives/directives',
        'usermanagement/modules',
    ],
    function () {   
        angular.bootstrap(document, ['shopApp']);
    });
