/**
 * Created by ofir on 7/30/15.
 */
//var myAppModule = angular.module('app',[]);

myAppModule.controller("writeController", ["$scope", "keymapper", "restGate", function ($scope, keyMapper, restGate) {
    $scope.selectedView = 1;
    $scope.text = "התחלה";
    console.log('write controller is been loaded');

    var handler = function (e) {
        var charCode = e.which || e.keyCode;
        console.log(charCode);
        console.log(e);
        console.log("'" + String.fromCharCode(e.keyCode) + "'");
        var key = keyMapper.getMappedKey(e);
        if (key != '') {
            console.log('+');
            $scope.text = $scope.text + key;
            $scope.$apply();
        }
    };

    var $doc = angular.element(document);

    $doc.on('keydown', handler);
    $scope.$on('$destroy', function () {
        $doc.off('keydown', handler);
    });

    $scope.keypress = function (e) {
        console.log(e);
    };

    $scope.sendLetter = function () {
        //alert('sending...');
        $scope.selectedView = 2;
    };

    $scope.validateSend = function () {
        restGate.test();
    };

    $scope.tossLetter = function () {
        $scope.text = '';
    };
}]);
