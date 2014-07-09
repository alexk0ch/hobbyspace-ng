'use strict';

angular.module('HS', [
  'ngRoute',
  'HS.filters',
  'HS.services',
  'HS.directives',
  'HS.controllers'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: ''});
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: ''});
  $routeProvider.when('/register', {templateUrl: 'partials/register.html', controller: ''});
  $routeProvider.when('/events', {templateUrl: 'partials/events.html', controller: ''});
  $routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: ''});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
