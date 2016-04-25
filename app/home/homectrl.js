(function () {
    'use strict';
    var homeCtrl = function ($scope) {
       // var title = "Dear Customer welcome to the amazing sales";
        $scope.title = "Dear Customer";

        $scope.clickMe = function () {
            console.log($scope);
        };
    };
    angular.module('amazingSales.home')
           .controller("homeCtrl", ["$scope",homeCtrl]);
})();

//in this example homeCtrl is dependent
//$scope is a service