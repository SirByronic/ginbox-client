'use strict';

angular.module('InboxApp.write', ['autocomplete']).controller('WriteCtrl', ['$scope', '$http', function($scope,$http) {
  $http.get('http://localhost:8081/api/inbox/contacts/USER_ID').
        success(function(data) {
          console.log(data);
            $scope.contacts = data;
        });

  $scope.send = function(email_object) {
    var data = {
                user_id: 'USER_ID',
                to: email_object.to,
                subject: email_object.subject,
                content: email_object.content
              };
     console.log(data)
      $http({
                        method  : 'POST',
                        url     : 'http://localhost:8081/api/inbox/messages/send',
                        data    : data, // pass in data as strings
                        headers : { 'Content-Type': 'application/json'  }  // set the headers so angular passing info as form data (not request payload)
                                  })
           .success(function(data, status) {
        console.log(data)
      });
    };
}]);
