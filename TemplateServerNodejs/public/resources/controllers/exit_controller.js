
"use strict";

module_authen.controller("ExitController", ["$scope", "$rootScope", "$location", "AuthenticationService",
  function ($scope, $rootScope, $location, AuthenticationService) {
    // reset login status
    AuthenticationService.ClearCredentials();
    $location.path("/login");
  }
]);
