"use strict";

module_authen.controller("KhachHangController", ["$scope", "$rootScope", "$location", "AuthenticationService", "$http",
  function ($scope, $rootScope, $location, AuthenticationService, $http) {


    $scope.tabkhachhang = 1;

    $scope.showThongTin = function () {

      $scope.$apply(function () {
        $scope.tabkhachhang = 1;
      });
    }

    $scope.updatethongtin = function () {

      $http({
        method: 'PUT',
        url: '/api/khachhang/id/' + $rootScope.globals.currentUser.id,
        data: $.param({
          TENKH: $scope.TENKH,
          CMND: $scope.CMND,
          DIENTHOAI: $scope.DIENTHOAI,
          DIACHI: $scope.DIACHI,
          EMAIL: $scope.EMAIL,
          GIOITINH: $scope.GIOITINH
      }),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}

      }).then(function (respone) {

      }, function (error) {

      });
    }

    function laythongtin() {

      $http({
        method: 'GET',
        url: '/api/khachhang/id/' + $rootScope.globals.currentUser.id
      }).then(function (respone) {
        $scope.khachhang = respone.data;
        $scope.TENKH = $scope.khachhang.TENKH;
        $scope.DIENTHOAI = $scope.khachhang.DIENTHOAI;
        $scope.DIACHI = $scope.khachhang.DIACHI;
        $scope.CMND = $scope.khachhang.CMND;
        $scope.GIOITINH = $scope.khachhang.GIOITINH;


      }, function (error) {

      });

    }

    

    function init() {

      laythongtin();
      lichsuhoatdong();

    }

    function  lichsuhoatdong() {

      $http({
        method: 'GET',
        url: '/api/khachhang/lichsuhoatdong/id/' + $rootScope.globals.currentUser.id
      }).then(function (respone) {
        $scope.lichsuhoatdong = respone.data;
      }, function (error) {

      });
      /*$scope.updatematkhau = function () {

     
      $http({
        method: 'PUT',
        url: '/api/taikhoan/id/' + $rootScope.globals.currentUser.id,
        data: $.param({
          MAUKHAU: $scope.MATKHAU,
          MAUKHAUMOI: $scope.KHAUKHAUMOI,
      }),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}

      }).then(function (respone) {

      }, function (error) {

      });
    }*/
    }
    
    init();

  }


  
]);