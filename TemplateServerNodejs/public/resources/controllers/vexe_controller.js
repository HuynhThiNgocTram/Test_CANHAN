"use strict";

module_home.controller("HuyVeController", ["$scope", "$rootScope", "$interval", "$http",
    function ($scope, $rootScope, $interval, $http) {


        $scope.spHuyVe = function () {
            if (!$scope.sodt) {
                $scope.messSDT = "Trong";
            }
            if (!$scope.idve) {
                $scope.messVE = "Trong";
            }
            else {
                $http({
                    method: 'PUT',
                    url: '/api/huyve/idve/' + $scope.idve + '/sodt/' + $scope.sodt
                }).then(function (response) {
                    if (response.data.affectedRows == 1) {
                        alert("Huy ve thanh cong");
                        location.href='/danhsachnhaxe';
                    }
                    else {
                        alert("So dien thoai hoac ma ve khong dung.Vui long kiem tra lai");

                    }
                }, function (error) {

                });
            }
        }
        function init() {
        }
        init();
    }]);
