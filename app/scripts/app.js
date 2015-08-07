'use strict';

/**
 * @ngdoc overview
 * @name menlyApp
 * @description
 * # menlyApp
 *
 * Main module of the application.
 */
angular
  .module('menlyApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'MenlyModels'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/gloss', {
        templateUrl: 'views/gloss.html',
        controller: 'GlossCtrl',
        controllerAs: 'gloss'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run([function ($rootScope) {
    Parse.initialize("TkWll9Dd3nFuYlE6CnshOs3Av8YBN3JM2QKikKt1", "59OsHxFPSUNuv4HwulJSWtTcJYeReRRoU6qZlpA1");


  }]);
