"use strict";

module_home.controller("HomeController", ["$scope", "$rootScope", "$interval","$http",
 function ($scope, $rootScope, $interval,$http) {

    function init() {
        LayThongTin();
    }

    function LayThongTin() {
        //Get thongtin
        $http({
            method: 'GET',
            url: '/api/sinhvien/' + $rootScope.globals.currentUser.id
        }).then(function (respone) {
            $scope.sinhvien=respone.data[0];

            
        }, function (error) {

        });
    }
    init();
}]);
