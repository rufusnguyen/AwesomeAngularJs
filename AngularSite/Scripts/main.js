require.config({
    baseUrl: 'app',
    urlArgs: 'v=1.0',
    waitSeconds: 30
});

require(
    [
        'app',
        'usermanagement/controllers/demoController'
    ],
    function () {   
        angular.bootstrap(document, ['shopApp']);
    });
