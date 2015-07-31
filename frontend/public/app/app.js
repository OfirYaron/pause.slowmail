/**
 * Created by ofir on 7/30/15.
 */
var myAppModule = angular.module('app', []);

myAppModule.factory("restGate", ["$http",function ($http) {

    var host = 'http://localhost:8000/api';

    var pushLetter = function(fromName, fromEmail, toName, toEmail, content, settings){
        console.log('sending...');
        $http.post(host + '/',
            {
                from_name:fromName,
                from_email:fromEmail,
                to_name:toName,
                to_email:toEmail,
                content:content,
                settings:settings
            }).
            success(function(data, status, headers, config) {
            }).
            error(function(data, status, headers, config) {
            });
    };

    var popLetter = function(guid){
        console.log('getting...');
        $http.get(host + '/' + guid).
            success(function(data, status, headers, config) {
            }).
            error(function(data, status, headers, config) {
            });
    };

    var dummy = function(){
        alert('this is a test');
    };

    return {
        sendLetter:pushLetter,
        getLetter:popLetter,
        test: dummy
    }
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
            return keyCodeToUnicodeHebrew(charCode);
        }
        else {
            return ''
        }
    };

    var keyCodeToUnicodeHebrew = function (keyCode) {
        var mapping = {
            65: '\u05E9', 66: '\u05E0', 67: '\u05D1', 68: '\u05D2',  // A-D
            69: '\u05E7', 70: '\u05DB', 71: '\u05E2', 72: '\u05D9',  // E-H
            73: '\u05DF', 74: '\u05D7', 75: '\u05DC', 76: '\u05DA',  // I-L
            77: '\u05E6', 78: '\u05DE', 79: '\u05DD', 80: '\u05E4',  // M-P
            81: '\u2215', 82: '\u05E8', 83: '\u05D3', 84: '\u05D0',  // Q-T
            85: '\u05D5', 86: '\u05D4', 87: '\u0027', 88: '\u05E1',  // U-X
            89: '\u05D8', 90: '\u05D6',                              // Y-Z
            188: '\u05EA', 32: '\u0020', 191: '\u002E', 222: '\u002C'  // Non english chars
        };
        return mapping[keyCode] || String.fromCharCode(keyCode)
    };

    return {
        getMappedKey: keyMapping
    };
});
