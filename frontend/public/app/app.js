/**
 * Created by ofir on 7/30/15.
 */
var myAppModule = angular.module('app', []);

myAppModule.factory("restGate", function () {

    var host = 'http://localhost:1212/';

    var pushLetter = function(fromName, fromEmail, toName, toEmail, content, settings){
        $http.post(host + '/push',
            {
                fromName:fromName,
                fromEmail:fromEmail,
                toName:toName,
                toEmail:toEmail,
                content:content,
                settings:settings
            }).
            success(function(data, status, headers, config) {
            }).
            error(function(data, status, headers, config) {
            });
    };

    var popLetter = function(guid){
        $http.get(host + '/get?guid=' + guid).
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
}).factory("keymapper", function () {
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
