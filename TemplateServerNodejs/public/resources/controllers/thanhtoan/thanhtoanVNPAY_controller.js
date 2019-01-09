"use strict";

module_home.controller("ThanhToanVNPAYController", ["$scope", "$rootScope", "$interval", "$http", "$localStorage",
    function ($scope, $rootScope, $interval, $http, $localStorage) {

        function init() {
            if (!$localStorage.slnguoi || $scope.slnguoi)
                location.href = "/danhsachnhaxe";
            else {
                $scope.slnguoi = $localStorage.slnguoi;
                $scope.ttcx = $localStorage.ttcx;
                $scope.tongtien = $scope.ttcx.GIAVE * $scope.slnguoi;
            }
        }

        $scope.thanhtoan = function () {
            $http({
                method: 'POST',
                url: '/api/thanhtoan/thanhtoanVNPAY',
                data: $.param({
                    sotien: $scope.tongtien,
                    noidung: $scope.noidung,
                    nganhang: $scope.nganhang,
                    ngonngu: $scope.ngonngu,
                    idchuyenxe: $scope.ttcx.id,
                    slnguoi: $scope.slnguoi
                }),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function (respone) {

                console.log(respone.data);
                if(respone.data.msg)
                {
                        alert(respone.data.msg);
                }
                if(respone.data.url){
                    location.href = respone.data.url;
                }
            });

        }

        init();
    }]);
