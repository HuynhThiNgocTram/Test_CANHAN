"use strict";

module_home.controller("HomePageController", ["$scope", "$rootScope", "$interval", "$http","$localStorage" ,
    function ($scope, $rootScope, $interval, $http,$localStorage) {

        function loaddiemdi() {

            $http({
                method: 'GET',
                url: 'api/tuyenxe/diemdi'
            }).then(function (respone) {
                $scope.diemdi = respone.data;
                $scope.selectDiemDi = $scope.diemdi[0];


            }, function (error) {

            });

        }

        function loadDiemDen() {
            $http({
                method: 'GET',
                url: 'api/tuyenxe/diemden/'
            }).then(function (respone) {
                $scope.diemden = respone.data;
                $scope.selectDiemDen = $scope.diemden[0];

            }, function (error) {

            });
        }

        function loadchuyendiphobien() {
            $http({
                method: 'GET',
                url: 'api/tuyenxe/chuyendiphobien/diemdi/Sài%20Gòn'
            }).then(function (respone) {
                $scope.chuyendiphobiensaigon = respone.data;
            }, function (error) {

            });
        }

        function loadchuyendiphobiencantho() {
            $http({
                method: 'GET',
                url: 'api/tuyenxe/chuyendiphobien/diemdi/Cần%20Thơ'
            }).then(function (respone) {
                $scope.chuyendiphobiencantho = respone.data;
            }, function (error) {

            });
        }

        $scope.timvexe = function () {
               var chuoi=$('#datetitle').val().split('/');
            $localStorage.ngay =chuoi[2]+"-"+chuoi[0]+"-"+chuoi[1];
            $localStorage.diemdi=$scope.selectDiemDi;
            $localStorage.diemden=$scope.selectDiemDen;
            window.location.href = "#/danhsachnhaxe/";
        }

        // $scope.startdate;

        $scope.$watch("startdate", function(newValue, oldValue) {
            console.log("I've changed : ", $scope.startdate);
        });

        $scope.Xemvexephuquoc = function () {
            window.location.href = "#/danhsachnhaxe/phuquoc/" ;
        }
        $scope.Xemvexeangiang = function () {
            window.location.href = "#/danhsachnhaxe/angiang/" ;
        }
        $scope.Xemvexebentre = function () {
            window.location.href = "#/danhsachnhaxe/bentre/" ;
        }
        
        $scope.gioithieu = function () {
            window.location.href = "#/gioithieu/" ;
        }
        $scope.trangchu = function () {
            window.location.href = "#/homepage/" ;
        }
        $scope.quydinhchung = function () {
            window.location.href = "#/quydinhchung/" ;
        }
        $scope.lienhe = function () {
            window.location.href = "#/lienhe/" ;
        }
        $scope.dangnhap = function () {
            window.location.href = "#/dangnhap/" ;
        }
        $scope.dangky = function () {
            window.location.href = "#/dangky/" ;
        }

        $scope.tuyenduongsaigontravinh = function () {
            window.location.href = "#/danhsachnhaxe/diemdi/Sài%20Gòn/diemden/Trà%20Vinh/" ;
        }
        
        $scope.tuyenduongsaigonbentre = function () {
            window.location.href = "#/danhsachnhaxe/diemdi/Sài%20Gòn/diemden/Bến%20Tre/" ;
        }
        $scope.tuyenduongsaigondongnai = function () {
            window.location.href = "#/danhsachnhaxe/diemdi/Sài%20Gòn/diemden/Đồng%20Nai/" ;
        }
        $scope.tuyenduongsaigonvungtau = function () {
            window.location.href = "#/danhsachnhaxe/diemdi/Sài%20Gòn/diemden/Vũng%20Tàu/" ;
        }
        $scope.tuyenduongsaigontravinh = function () {
            window.location.href = "#/danhsachnhaxe/diemdi/Sài%20Gòn/diemden/Trà%20Vinh/" ;
        }
        $scope.diachi = function () {
            window.location.href = "#/diachi/" ;
        }
        $scope.gmail = function () {
            window.location.href = "#/gmail/" ;
        }
        
        
        
        function init() {
            loaddiemdi();
            loadDiemDen();
            loadchuyendiphobien();
            loadchuyendiphobiencantho();
        }

        init();

    }
]);