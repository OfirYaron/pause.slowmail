/**
 * Created by ofir on 7/30/15.
 */
//var myAppModule = angular.module('app',[]);

myAppModule.controller("writeController", ["$scope","keymapper", "restGate", function ($scope, keyMapper, restGate) {
    $scope.selectedView = 1;
    $scope.text = "התחלה";
    console.log('write controller is been loaded');

    var handler = function (e) {
        var charCode = e.which || e.keyCode;
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

    //$('body').on('click', function(event){
    //    //event.preventDefault();
    //    event.preventDefault();
    //    setTimeout(function(){
    //        $scope.setFocus()
    //    },  1);
    //    // your code to handle the clicks
    //});

    $scope.keypress = function (e) {
        console.log(e);
        handler(e);
    };

    //$scope.setFocus = function(){
    //    console.log('setting focus');
    //    if ($scope.selectedView == 1) {
    //        $("#autoFocus").focus();
    //        console.log('in focus');
    //    }
    //};

    $scope.sendLetter = function () {
        $scope.selectedView += 1;
        $doc.off('keydown', handler);
        console.log('current step is: ' + $scope.selectedView)
        if ($scope.selectedView==4)
            $scope.validateSend();

    };

    $scope.back = function(){
        $scope.selectedView -= 1;
        if ($scope.selectedView == 1)
            $doc.on('keydown', handler);
    }

    $scope.validateSend = function () {
        restGate.sendLetter($scope.fromName, $scope.fromEmail, $scope.toName, $scope.toEmail, $scope.text, {});
    };

    $scope.tossLetter = function () {
        $scope.text = '';
    };
}]);
