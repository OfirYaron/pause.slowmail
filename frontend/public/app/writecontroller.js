/**
 * Created by ofir on 7/30/15.
 */
var myAppModule = angular.module('app', []);

myAppModule.controller("writeController", ["$scope", "keymapper", function ($scope, keyMapper) {
    $scope.text = "התחלה";
    console.log('write controller is been loaded');

    var handler = function (e) {
        var charCode = e.which || e.keyCode;
        console.log(charCode);
        console.log(e);
        console.log("'" + String.fromCharCode(e.keyCode) + "'");
        var key = keyMapper.getMappedKey(e);
        if (key!='')
        {
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
    }

    $scope.sendLetter = function(){

    };

    $scope.tossLetter = function(){

    };

}]).factory("keymapper", function () {
    var keyMapping = function (key) {
        var charCode = key.which || key.keyCode;
        if (event.keyCode === 8)
            key.preventDefault();
        if (event.keyCode === 13)
            return '\n';
        if ((charCode >= 48 && charCode <=57) ||
        (charCode>=65 && charCode <= 90) ||
            (charCode == 32 || charCode == 186 || charCode == 222 || charCode == 188 || charCode == 190 || charCode == 191)){
        //if (charCode > 31 &&
        //    (charCode < 58 || charCode > 107 || charCode > 219 || charCode > 221) &&  //charCode < 48 || charCode > 57 ||
        //    charCode != 40 && charCode != 41 && (charCode < 43 || charCode > 46)) {
            return String.fromCharCode(key.keyCode);
        }
        else {
            return ''
        }
    };

    return {
        getMappedKey: keyMapping
    };
});
