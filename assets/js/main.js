    var app = angular.module("myapp", ['ngRoute']);
    app.config(['$routeProvider',function($routeProvider) {
        $routeProvider
        .when('/link1', {
            templateUrl: "partials/link2.html",
            controller: "Link1Ctrl"
        })
        .when('/link2', {
            templateUrl: "partials/link2.html",
            controller: "Link2Ctrl"
        })
    }]);
    app.controller('Link1Ctrl', function($scope){
        $scope.model = {
            message: "This is page 1"
        }
    });
    app.controller('Link2Ctrl', function($scope){
        $scope.model = {
            message: "This is page 2"
        }
    });