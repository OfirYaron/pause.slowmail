/**
 * Created by ofir on 7/30/15.
 */
//var myAppModule = angular.module('app',[]);

myAppModule.controller("writeController", ["$scope","keymapper", "restGate", function ($scope, keyMapper, restGate) {
    $scope.selectedView = 1;
    $scope.text = "התחלה";
    $scope.fromName = "אופיר";
    $scope.fromEmail = "a@a.com";
    $scope.toName = "טום";
    $scope.toEmail = "ofirya@gmail.com";

    console.log('read controller is been loaded');

    $scope.back = function(){
        $scope.selectedView -= 1;
        if ($scope.selectedView == 1)
            $doc.on('keydown', handler);
    };

    $scope.tossLetter = function () {
        $scope.text = '';
    };
}]);
