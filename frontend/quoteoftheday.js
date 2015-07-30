/**
 * Created by ofir on 7/29/15.
 */
var http = require('http');
//var request = require('request');
var request = require('sync-request');

var counter = 0;

module.exports = {
    getQuote: function(){
        var res = request('GET', 'http://api.theysaidso.com/qod.json?category=inspire');
        return res.body.toString('utf-8');

        //request('http://lapi.theysaidso.com/god.json', function (error, response, body) {
        //    if (!error && response.statusCode == 200) {
        //        console.log(body); // Print the body of response.
        //        return body;
        //    }
        //});
    },
    test: function(){
        return counter++;
    }
};
