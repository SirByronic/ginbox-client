'use strict';

angular.module('InboxApp.inbox', []).controller('InboxCtrl', ['$scope', '$http', function($scope,$http) {
  var label = "INBOX";
  $scope.inbox_active = "active";
  $http.get('http://localhost:8081/api/inbox/labels/USER_ID').
        success(function(data) {
            $scope.labels = data.labels;
        });
  $http.get('http://localhost:8081/api/inbox/threads/USER_ID/'+label).
        success(function(data) {
            $scope.threads = data.threads;
        });
}]).
controller('SentCtrl', ['$scope', '$http', function($scope,$http) {
  var label = "SENT"
  $scope.sent_active = "active";
  $http.get('http://localhost:8081/api/inbox/threads/USER_ID/'+label).
        success(function(data) {
            $scope.threads = data.threads;
        });
}]).
controller('UnreadCtrl', ['$scope', '$http', function($scope,$http) {
  var label = "UNREAD"
  $scope.unread_active = "active";
  $http.get('http://localhost:8081/api/inbox/threads/USER_ID/'+label).
        success(function(data) {
            $scope.threads = data.threads;
        });
}]).
controller('DraftCtrl', ['$scope', '$http', function($scope,$http) {
  var label = "DRAFT"
  $scope.draft_active = "active";
  $http.get('http://localhost:8081/api/inbox/threads/USER_ID/'+label).
        success(function(data) {
            $scope.threads = data.threads;
        });
}]).
controller('TrashCtrl', ['$scope', '$http', function($scope,$http) {
  var label = "TRASH"
  $scope.trash_active = "active";
  $http.get('http://localhost:8081/api/inbox/threads/USER_ID/'+label).
        success(function(data) {
            $scope.threads = data.threads;
        });
}]).
controller('ImportantCtrl', ['$scope', '$http', function($scope,$http) {
  var label = "IMPORTANT"
  $scope.important_active = "active";
  $http.get('http://localhost:8081/api/inbox/threads/USER_ID/'+label).
        success(function(data) {
            $scope.threads = data.threads;
        });
}])
