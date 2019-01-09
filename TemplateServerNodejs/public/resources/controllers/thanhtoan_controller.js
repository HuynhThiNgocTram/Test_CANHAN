"use strict";

module_home.controller("ThanhToanController", ["$scope", "$rootScope","$localStorage", "$interval","$http","$cookieStore",
 function ($scope, $rootScope,$localStorage, $interval,$http,$cookieStore) {

  
    function init() {
        LayThongTin();
    }

    function LayThongTin() {
        $scope.ttcx=$localStorage.ttcx;
        $scope.slnguoi=$localStorage.slnguoi;
    }

    $scope.chonthanhtoan=function(){
        if($scope.checkradio=="VNPay Sandbox")
        {
            $localStorage.slnguoi= $scope.slnguoi;
            location.href="/thanhtoanVNPAY";
        }
    }

    init();
}]);
