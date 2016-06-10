/*#######################################################################
  
  Dan Wahlin
  http://twitter.com/DanWahlin
  http://weblogs.asp.net/dwahlin
  http://pluralsight.com/training/Authors/Details/dan-wahlin

  Thanks to Ward Bell for helping with the Breeze Integration
  http://twitter.com/WardBell
  http://neverindoubtnet.blogspot.com

  #######################################################################*/

'use strict';

define(['common/services/routeResolver', 'definitionsLoader'], function (routeResolver, definitionsLoader) {

    var app = angular.module('shopApp', ['routeResolverServices', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ui.router']);

    app.config(['$stateProvider', '$urlRouterProvider', 'routeResolverProvider', '$controllerProvider',
                '$compileProvider', '$filterProvider', '$provide', '$httpProvider', 

        function ($stateProvider, $urlRouterProvider, routeResolverProvider, $controllerProvider,
                  $compileProvider, $filterProvider, $provide, $httpProvider) {
            app.register =
            {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            //Define routes - controllers will be loaded dynamically
            var route = routeResolverProvider.route;

            $urlRouterProvider.rule(function ($injector, $location) {
                var path = $location.path(), normalized = path.toLowerCase();
                if (path !== normalized) {
                    $location.replace().path(normalized);
                }
            });

            $urlRouterProvider.otherwise("/");

            var states = definitionsLoader.statesToConfigure;
            for (var i = 0; i < states.length; i++) {
                var state = states[i];
                var modifiedStateUrl = state.url.split('/');
                modifiedStateUrl[1] = modifiedStateUrl[1].toLowerCase();
                var newStateUrl = modifiedStateUrl.join('/');
                $stateProvider.state(state.stateName, route.resolve(newStateUrl, state.baseName, state.path));
            }
        }]);

    app.run(['$timeout', '$window', 
        function ($timeout, $window) {


        }]);
    return app;
});