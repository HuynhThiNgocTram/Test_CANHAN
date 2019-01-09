"use strict";

module_home.controller("AdminController", ["$scope", "$rootScope", "$interval", "$http",
    function ($scope, $rootScope, $interval, $http) {

        function setDataSource(DB)
        {
            var dataSource = new kendo.data.DataSource({
                data: DB
            });
           // var grid = $("#grid").data("kendoGrid");
            return dataSource;
        }

        // $scope.delete = function(e) {
        //     $http({
        //         method: 'DELETE',
        //         url: 'api/admin/id/' + e
        //     }).then(function successCallback(response) {

        //         //check thanh cong

        //     }, function errorCallback(response) {

        //         //that bai
        //     });
        // }

     

        $scope.deleteTaiKhoanKhachHang = function(e) {

            console.log("xóa", e);
            //$http DELETE function
            $http({
        
              method: 'DELETE',
              url: '/api/admin/id/' + e.model.id
        
            }).then(function successCallback(response) {
                console.log("thanh cong!")
              alert("User has deleted Successfully");
              
        
            }, function errorCallback(response) {
                console.log("thanh cong!")
              alert("Error. while deleting user Try Again!");     
            });
        
          };
        // var User = $resource('/api/admin/id/:userId', {
        //     userId: '@id'
        // }, {
        //     delete: {
        //         method: 'DELETE'
        //     }
        // });

        // User.delete({
        //     userId: $scope.delete(e)
        // }).$promise.then(function (user) {
        //     // perform other operations
        // });

        $(document).ready(function(){
            $("#iddsnx").click(function(){
                $(".dstk").hide();
                $(".dsv").hide();
                $(".dsnx").show();
            })
        })

        $(document).ready(function(){
            $("#idtkkh").click(function(){
                $(".dsnx").hide();
                $(".dsv").hide();
                $(".dstk").show();
            })
        })

        $(document).ready(function(){
            $("#iddsv").click(function(){
                $(".dsnx").hide();
                $(".dstk").hide();
                $(".dsv").show();
            })
        })

        $(".dsnx").css("display","none");
        $(".dsv").css("display","none");

        function DanhSachTaiKhoan() {

            $http({
                method: 'GET',
                url: 'api/admin'
            }).then(function (respone) {
                $scope.DSTK = respone.data;
                $("#grid").data("kendoGrid").setDataSource($scope.DSTK);
            }, function (error) {

            });
        }  
        
        function DanhSachNhaXe() {

            $http({
                method: 'GET',
                url: 'api/admin/danhsachnhaxe/'
            }).then(function (respone) {
                $scope.DSNX = respone.data;
                $("#grid_dsnx").data("kendoGrid").setDataSource($scope.DSNX);
            }, function (error) {
            });
        }  

        function DanhSachVe() {

            $http({
                method: 'GET',
                url: 'api/admin/danhsachve/'
            }).then(function (respone) {
                $scope.DSV = respone.data;
                $("#grid_dsv").data("kendoGrid").setDataSource($scope.DSV);
            }, function (error) {
            });
        }  

        function init() {
            DanhSachTaiKhoan();
            DanhSachNhaXe();
            DanhSachVe();
            // deleteTaiKhoanKhachHang(e);
        }

        init();

    }
]);