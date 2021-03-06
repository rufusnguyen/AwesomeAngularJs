﻿/*#######################################################################
  
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

    var app = angular.module('shopApp', ['routeResolverServices', 'ui.router', "oc.lazyLoad", "ui.bootstrap", "ngSanitize"]);

    app.config(['$stateProvider', '$urlRouterProvider', 'routeResolverProvider', '$controllerProvider',
                '$compileProvider', '$filterProvider', '$provide', '$httpProvider', '$ocLazyLoadProvider',

        function ($stateProvider, $urlRouterProvider, routeResolverProvider, $controllerProvider,
                  $compileProvider, $filterProvider, $provide, $httpProvider, $ocLazyLoadProvider) {
            // this option might be handy for migrating old apps, but please don't use it
            // in new ones!
            $controllerProvider.allowGlobals();
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

            $urlRouterProvider.otherwise("/dashboard.html");

            //var states = definitionsLoader.statesToConfigure;
            //for (var i = 0; i < states.length; i++) {
            //    var state = states[i];
            //    var modifiedStateUrl = state.url.split('/');
            //    modifiedStateUrl[1] = modifiedStateUrl[1].toLowerCase();
            //    var newStateUrl = modifiedStateUrl.join('/');
            //    $stateProvider.state(state.stateName, route.resolve(newStateUrl, state.baseName, state.path));
            //}
            $stateProvider

        // Dashboard
        .state('dashboard', {
            url: "/dashboard.html",
            templateUrl: "app/common/views/dashboard.html",
            data: { pageTitle: 'Dashboard' },
            controller: "DashboardController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'DashboardController',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'assets/global/plugins/morris/morris.css',
                            'assets/global/plugins/morris/morris.min.js',
                            'assets/global/plugins/morris/raphael-min.js',
                            'assets/global/plugins/jquery.sparkline.min.js',
                            'assets/pages/scripts/dashboard.js',
                        ]
                    });
                }]
            }
        })

            // Advanced Datatables
        .state('userManagement', {
            url: "/users/managed.html",
            templateUrl: "app/usermanagement/views/userManagement.html",
            data: { pageTitle: 'User Management' },
            controller: "UserManagement",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'User Management',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            'assets/global/plugins/datatables/datatables.css',
                            'assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            'assets/global/plugins/datatables/datatables.js',

                            'assets/pages/scripts/table-datatables-managed.js',

                        ]
                    });
                }]
            }
        });

            $ocLazyLoadProvider.config({
                // global configs go here
            });
        }]);

    /* Setup global settings */
    app.factory('settings', ['$rootScope', function ($rootScope) {
        // supported languages
        var settings = {
            layout: {
                pageSidebarClosed: false, // sidebar menu state
                pageContentWhite: true, // set page content layout
                pageBodySolid: false, // solid body color state
                pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
            },
            assetsPath: 'assets',
            globalPath: 'assets/global',
            layoutPath: 'assets/layouts/layout',
        };

        $rootScope.settings = settings;

        return settings;
    }]);


    /***
    Layout Partials.
    By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial 
    initialization can be disabled and Layout.init() should be called on page load complete as explained above.
    ***/

    /* Setup Layout Part - Header */
    app.controller('HeaderController', ['$scope', function ($scope) {
        $scope.$on('$includeContentLoaded', function () {
            Layout.initHeader(); // init header
        });
    }]);

    /* Setup Layout Part - Sidebar */
    app.controller('SidebarController', ['$scope', function ($scope) {
        $scope.$on('$includeContentLoaded', function () {
            Layout.initSidebar(); // init sidebar
        });
    }]);

    /* Setup Layout Part - Quick Sidebar */
    app.controller('QuickSidebarController', ['$scope', function ($scope) {
        $scope.$on('$includeContentLoaded', function () {
            setTimeout(function () {
                QuickSidebar.init(); // init quick sidebar        
            }, 2000)
        });
    }]);

    /* Setup Layout Part - Theme Panel */
    app.controller('ThemePanelController', ['$scope', function ($scope) {
        $scope.$on('$includeContentLoaded', function () {
            Demo.init(); // init theme panel
        });
    }]);

    /* Setup Layout Part - Footer */
    app.controller('FooterController', ['$scope', function ($scope) {
        $scope.$on('$includeContentLoaded', function () {
            Layout.initFooter(); // init footer
        });
    }]);


    app.run(["$rootScope", "$state", "settings",
    function ($rootScope, $state, settings) {
        $rootScope.$state = $state; // state to be accessed from view
        $rootScope.$settings = settings; // state to be accessed from view
    }]);
    return app;
});