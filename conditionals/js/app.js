var compare = function(){

	var a = document.getElementById('a').value;
	a = parseFloat(a);

	var b = document.getElementById('b').value;
	b = parseFloat(b);

	var comparison; 

	if (a > b) {

		comparison = ">";

	} else if (a < b) {

		comparison = "<";

	} else if (a === b) {

		comparison = "=";

	}

	document.getElementById('comparison').innerHTML = comparison;

};

document.getElementById("submit").addEventListener("click",compare);
