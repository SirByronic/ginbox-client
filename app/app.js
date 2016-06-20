'use strict';

// Declare app level module which depends on views, and components
angular.module('InboxApp', [
  'ngRoute',
  'InboxApp.login',
  'Inbox.authenticate',
  'InboxApp.inbox',
  'InboxApp.write',
  'InboxApp.version',
  'angularUtils.directives.dirPagination'
]).
config(['$locationProvider', '$routeProvider','$httpProvider', function($locationProvider, $routeProvider,$httpProvider) {
  $locationProvider.hashPrefix('!');
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $routeProvider.
      when('/login', {
        templateUrl: 'login/login.html',
        controller: 'LoginCtrl'
      }).
      when('/authenticate', {
        template: ' ',
        controller: 'AuthenticateCtrl'
      }).
      when('/inbox', {
        templateUrl: 'inbox/inbox.html',
        controller: 'InboxCtrl'
      }).
      when('/inbox/sent', {
        templateUrl: 'inbox/inbox.html',
        controller: 'SentCtrl'
      }).
      when('/inbox/unread', {
        templateUrl: 'inbox/inbox.html',
        controller: 'UnreadCtrl'
      }).
      when('/inbox/draft', {
        templateUrl: 'inbox/inbox.html',
        controller: 'DraftCtrl'
      }).
      when('/inbox/trash', {
        templateUrl: 'inbox/inbox.html',
        controller: 'TrashCtrl'
      }).
      when('/inbox/important', {
        templateUrl: 'inbox/inbox.html',
        controller: 'ImportantCtrl'
      }).
      when('/inbox/write', {
        templateUrl: 'inbox/write.html',
        controller: 'WriteCtrl'
      }).
      otherwise({
        redirectTo: '/login'
      });
      //$locationProvider.html5Mode(true)
}]).
controller('MainCtrl', ['$scope', '$http', function($scope,$http) {
  console.log("hello world !!")
  $http.get('http://localhost:8081/api/inbox/profile/USER_ID/').
        success(function(data) {
            console.log(data)
            $scope.email = data.emails[0].value;
            $scope.fullName = data.displayName;
            $scope.image = data.image.url;
        });
}]);
