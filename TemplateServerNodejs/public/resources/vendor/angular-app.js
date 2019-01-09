"use strict";


var module_authen = angular.module("Authentication", []);
var module_home = angular.module("Home", ['ngSanitize', 'ngAnimate']);
var basicHttpAuthApp = angular.module("thuongmaidientu", ["Authentication", "Home", "ngRoute", "ngStorage", "ngCookies"]);

basicHttpAuthApp.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/login", {
            controller: "LoginController",
            templateUrl: "/resources/views/login.html"
        })
        .when("/exit", {
            controller: "ExitController",
            templateUrl: "/resources/views/login.html"
        })
        .when("/danhsachnhaxe", {
            controller: "DanhSachNhaXeController",
            templateUrl: "/resources/views/danhsachnhaxe.html"
        })
        .when("/khachhang", {
            controller: "KhachHangController",
            templateUrl: "/resources/views/trangcanhan.html"
        })
        .when("/thanhtoan", {
            controller: "ThanhToanController",
            templateUrl: "/resources/views/thanhtoan.html"
        })
        .when("/thanhtoanVNPAY", {
            controller: "ThanhToanVNPAYController",
            templateUrl: "/resources/views/thanhtoanVNPAY.html"
        })
        .when("/returnVNPAY", {
            controller: "ReturnVNPAYController",
            templateUrl: "/resources/views/returnVNPAY.html"
        })
        .when("/", {
            controller: "HomePageController",
            templateUrl: "/resources/views/homepage.html"
        })
        .when("/huyve", {
            controller: "HuyVeController",
            templateUrl: "/resources/views/huyve.html"
        })
        .when("/homepage", {
            controller: "HomePageController",
            templateUrl: "/resources/views/homepage.html"
        })
        .when("/admin", {
            controller: "AdminController",
            templateUrl: "/resources/views/admin.html"
        })
}]);

basicHttpAuthApp.run(["$rootScope", "$location", "$cookieStore", "$http",
    function ($rootScope, $location, $cookieStore, $http) {
        $rootScope.globals = $cookieStore.get("globals") || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common["Authorization"] = "Basic " + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on("$locationChangeStart", function (event, next, current) {
            // redirect to login page if not logged in
            console.log("Link :" + $location.path());
            if ($location.path().indexOf("ID") !== -1 || $location.path() === "") {
                event.preventDefault();
            } else
                if ($location.path() === "/login" && $rootScope.globals.currentUser) {
                    $location.path("/");
                } else
                    if ($location.path() !== "/login" && $location.path() !== "/danhsachnhaxe" && $location.path() !== "/" && !$rootScope.globals.currentUser) {
                        $location.path("/login");
                    }
        });
    }
]);

