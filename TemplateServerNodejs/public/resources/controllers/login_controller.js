
"use strict";

module_authen.controller("LoginController", ["$scope", "$rootScope", "$location", "AuthenticationService",
  function ($scope, $rootScope, $location, AuthenticationService) {

    $scope.login = function () {
      AuthenticationService.Login($scope.username, $scope.password, function (response) {
        $scope.dataLoading = true;
        if (response.success.length!==0) {
          AuthenticationService.SetCredentials($scope.username, $scope.password,response.success);
          $scope.dataLoading = false;
          $location.path("/");
        } else {
          $scope.error = response.message;
          $scope.dataLoading = false;
        }
      });
    };



    
  }
]);
