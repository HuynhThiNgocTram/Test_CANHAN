"use strict";

module_home.controller("DanhSachNhaXeController", ["$scope", "$rootScope", "$localStorage", "$interval", "$http", "$cookieStore", "AuthenticationService",
    function ($scope, $rootScope, $localStorage, $interval, $http, $cookieStore, AuthenticationService) {


        $scope.toggle = [];
        function KiemTra()
        {
            if( $localStorage.diemdi &&$localStorage.diemden &&$localStorage.ngay)
                return true;
            return false;
        }
        function LoadTuyen() {
            if(KiemTra()){
                $scope.selectedDiemDi = $localStorage.diemdi;
                $scope.selectedDiemDen = $localStorage.diemden;
                $scope.ngay = new Date($localStorage.ngay);
               LoadDanhSachChuyenXe($scope.selectedDiemDi.DiemDi, $scope.selectedDiemDen.DiemDen, $scope.ngay);
            }
          
            $http({
                method: 'GET',
                url: '/api/tuyenxe/diemdi'
            }).then(function (respone) {
                $scope.diemdis = respone.data;
                if (!$scope.selectedDiemDi)
                    $scope.selectedDiemDi = $scope.diemdis[0];
                else
                {
                    $scope.diemdis.forEach(item => {
                        if(item.DiemDi==$scope.selectedDiemDi.DiemDi)
                        $scope.selectedDiemDi=item;
                    });
                }
            });
            $http({
                method: 'GET',
                url: '/api/tuyenxe/diemden'
            }).then(function (respone) {
                $scope.diemdens = respone.data;
                if (!$scope.selectedDiemDen)
                    $scope.selectedDiemDen = $scope.diemdens[0];
                else
                {
                    $scope.diemdens.forEach(item => {
                        if(item.DiemDen==$scope.selectedDiemDen.DiemDen)
                        $scope.selectedDiemDen=item;
                    });
                }
            });
            $http({
                method: 'GET',
                url: '/api/nhaxe'
            }).then(function (respone) {
                $scope.danhsachnhaxe = respone.data;
                $scope.selectedNhaXe = $scope.danhsachnhaxe[0];
            });
            $http({
                method: 'GET',
                url: '/api/loaixe'
            }).then(function (respone) {
                $scope.loaixes = respone.data;
                $scope.selectedLoaiXe = $scope.loaixes[0];
            });
        }
        function LoadSelectSort() {
            $scope.thoigians = [
                {
                    'name': 'Tăng dần',
                    'value': true
                },
                {
                    'name': 'Giảm dần',
                    'value': false
                }
            ];
            $scope.giaves = [{
                'name': 'Tăng dần',
                'value': true
            },
            {
                'name': 'Giảm dần',
                'value': false
            }];
            $scope.danhgias = [{
                'name': 'Tăng dần',
                'value': 'ASC'
            },
            {
                'name': 'Giảm dần',
                'value': 'DESC'
            }];
            $scope.selectedGiaVe = $scope.giaves[0];
            $scope.selectedThoiGian = $scope.thoigians[0];
            $scope.selectedDanhGia = $scope.danhgias[0];
        }

        $scope.TimXe = function () {
            if ($("#ngaydi").val())
            {
                $localStorage.diemdi=$scope.selectedDiemDi;
                $localStorage.diemden=$scope.selectedDiemDen;
                $localStorage.ngay =$("#ngaydi").val();
                LoadDanhSachChuyenXe($scope.selectedDiemDi.DiemDi, $scope.selectedDiemDen.DiemDen, $("#ngaydi").val());
            }
        }

        function LoadDanhSachChuyenXe(diemdi, diemden, thoigiandi) {
            $http({
                method: 'GET',
                url: '/api/nhaxe/tuyenxe/diemdi/' + diemdi + '/diemden/' + diemden + '/thoigian/' + thoigiandi
            }).then(function (respone) {

                $scope.danhsachchuyenxe = respone.data;
                $scope.toggle = [];

            });


        }
     $scope.chonDatVe= function (ttcx){
            $scope.ttcxCurrent=ttcx;
     }
        $scope.datvexeLogin = function () {

            AuthenticationService.Login($scope.username, $scope.password, function (response) {
                if (response.success.length !== 0) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password, response.success);
                    $localStorage.ttcx = $scope.ttcxCurrent;
                    $localStorage.slnguoi = 1;
                    location.href = "/thanhtoan";
                } else {
                    alert('Lỗi Login');
                }
            });
        }

        $scope.datvexe = function (ttcx) {
            $localStorage.ttcx = ttcx;
            $localStorage.slnguoi = 1;
            location.href = "/thanhtoan";
        }


        $scope.TimKiem = function () {
            LoadDanhSachThongTinChuyenXe($scope.selectedNhaXe.ID, $scope.selectedLoaiXe.ID, $scope.selectedThoiGian.value, $scope.selectedGiaVe.value, $scope.selectedDanhGia.value);
        }

        function LoadDanhSachThongTinChuyenXe(idnhaxe, idloaixe, sxthoigian, sxgiave, sxdanhgia) {

            $http({
                method: 'GET',
                url: '/api/nhaxe/idnhaxe/' + idnhaxe + '/idloaixe/' + idloaixe + '/thoigian/' + sxthoigian + '/giave/' + sxgiave + '/danhgia/' + sxdanhgia
            }).then(function (respone) {

                $scope.danhsachthongtinchuyenxe = respone.data;
                $scope.toggle = [];

            });

        }

        function init() {
            LoadTuyen();
            LoadSelectSort();

        }

        init();


    }]);
