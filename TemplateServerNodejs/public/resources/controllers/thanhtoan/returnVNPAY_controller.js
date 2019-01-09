"use strict";

module_home.controller("ReturnVNPAYController", ["$scope", "$rootScope", "$interval","$location", "$http","$localStorage",
    function ($scope, $rootScope, $interval, $location,$http,$localStorage) {
        $scope.ketquaDatVe= $location.search()['xn'];
        $scope.IDTHANHTOAN= $location.search()['IDTHANHTOAN'];
        $scope.error = $location.search()['error'];
        $scope.ttcx=$localStorage.ttcx;
        $scope.slnguoi=$localStorage.slnguoi;
    }]);
