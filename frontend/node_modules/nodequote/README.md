nodequote
=========

A basic [quote.fm API](http://quote.fm/labs "quote.fm API") wrapper with a simple interface. Compatibile with API Version 1.0.6.

## Install ##
```
npm install nodequote
```

## Usage ##
```
var nodeQuote = require("./nodequote.js");

nodeQuote.getUser("fweinb", function(json, error){
	if (!error){
		console.log(json);
	}
});
```
For more information see the [Function Reference](https://github.com/FWeinb/nodequote/wiki/Function-Reference) or the [test.js](https://github.com/FWeinb/nodequote/blob/master/test.js).
