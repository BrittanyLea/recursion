// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
	var someArray = [];
	var newVal;
	var newKey;
	
	if (typeof obj === 'number') {
		return String(obj);

	} else if (typeof obj === 'boolean') {
		return String(obj);

	} else if (typeof obj === 'string') {
		return "\"" + obj + "\"";

	} else if (typeof obj === 'object') {
		if (obj === null) {
			return 'null';

		} else if (Array.isArray(obj)) {
			for (var val in obj) {
				someArray.push(stringifyJSON(obj[val]));
			}
			someArray = "[" + someArray + "]";
			return someArray;

		} else {
			for (var key in obj) {
				newKey = stringifyJSON(key);
				newVal = stringifyJSON(obj[key]);
				if (!newVal) {
					return "{}"
					
				} else {
					someArray.push(newKey + ":" + newVal);
				}
			}
			someArray = "{" + someArray + "}";
			return someArray;
		}
	}
};
