'use strict';

angular.module('InboxApp.login', [])
.controller('LoginCtrl', ['$scope', '$http', function($scope,$http) {
  $http.get('http://localhost:8081/api/auth/url').
        success(function(data) {
            $scope.login_url = data.url
        });
}]);


angular.module('Inbox.authenticate', [])
.controller('AuthenticateCtrl', ['$scope', '$http','$routeParams', function($scope, $http,$routeParams){
  var code = $routeParams.code;
  console.log("hello world " + code)
}])
