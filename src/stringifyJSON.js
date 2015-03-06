// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var bookEnd = function (string, start, end) {
	var yo = start + string + end;
	return yo;
};

var stringifyJSON = function(obj) {
	var string = "", i, key;
	if (obj === undefined) {
		return undefined;
	}
	if (obj === null) {
		return 'null';
	} else if (obj instanceof Array) {
	  	for ( i = 0; i < obj.length; i++) {
	  		string += (stringifyJSON(obj[i]));
	  		if ( i < obj.length - 1 ) {
	  			string += ",";
	  		}
	 	}
  	string = bookEnd(string, "[", "]");
  	} else if (typeof obj === "string") {
	  	for (i = 0; i < obj.length; i++) {
	  		string+= obj[i];
	  	}
  		string = bookEnd(string, "\"", "\"");
  	} else if (obj instanceof Object) {
  		for (key in obj) {
	  		string += stringifyJSON(key) + ":" + stringifyJSON(obj[key])+",";
	  	}
  		string = string.slice(0,string.length-1);
  		string = bookEnd(string, "{", "}");
	} else if (typeof obj === "boolean") {
		if (obj) {
			string += "true";
		} else {
			string += "false";
		}
	} else if (typeof obj === "number") {
		string += obj;
	}
 return string;
};
