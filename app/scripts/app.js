'use strict';

/**
 * @ngdoc overview
 * @name briksApp
 * @description
 * # briksApp
 *
 * Main module of the application.
 */
angular
  .module('briksApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-bricksjs',
    'infinite-scroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function () {
  $.material.init()
  // $(document).arrive('*', function () {
  //   $.material.init()
  // });

});
