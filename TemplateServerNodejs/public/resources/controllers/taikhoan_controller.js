"use strict";

module_authen.controller("KhachHangController", ["$scope", "$rootScope", "$location", "AuthenticationService", "$http",
function ($scope, $rootScope, $location, AuthenticationService, $http) {



        /* function LayThongTin() {
            //Get thongtin
            $http({
                method: 'GET',
                url: '/api/taikhoan/id/' + $rootScope.globals.currentUser.id
            }).then(function (respone) {

                $scope.taikhoan = respone.data;

                $scope.TENDANGNHAP = $scope.taikhoan.TENDANGNHAP;
                $scope.MATKHAU = $scope.taikhoan.MATKHAU;
    

            }, function (error) {

            });
        }*/



        $scope.updatematkhau = function () {

            $http({
                method: 'GET',
                url: '/api/taikhoan/id/' + $rootScope.globals.currentUser.id
            }).then(function (respone) {
                $scope.taikhoan = respone.data;
                $scope.TENDANGNHAP = $scope.taikhoan.TENDANGNHAP;
                $scope.IDKHACHHANG = $scope.taikhoan.IDKHACHHANG;
                $scope.MATKHAU = $scope.taikhoan.MATKHAU;

                console.log(respone.data);

            }, function (error) {});

            $http({
                method: 'PUT',
                url: '/api/taikhoan/id/' + $rootScope.globals.currentUser.id,
                data: $.param({

                    MATKHAU: $scope.MATKHAU,
                    MATKHAUMOI: $scope.MATKHAUMOI       

                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }

            }).then(function (respone) {

            }, function (error) {

            });
        }

        function init() {
            //LayThongTin();
            updatematkhau();

        }
        init();

    }

]);