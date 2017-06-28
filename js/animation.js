		var switchStr = false;
function main () {
		
	var animatedStr = "";
	var i = 0;
	text();
	function text () {
		if (switchStr === false) {
			var str ="My name is Roberto";
			animate(str);

		} else if (switchStr === true) {
			var str ="I am a web developer";

			animate(str);
		}
	}

	function animate(str){
			animatedStr += str[i];
			$('#animated-text').text(animatedStr);
			if (i > str.length - 1) {
				reverse(str);
			} else {
				i++;
				window.setTimeout(text, 200);
			}
	}

	function reverse(str) {
		animatedStr = animatedStr.substr(0, i);
		$('#animated-text').text(animatedStr);
		if (i <= 0) {
			switchStr = (switchStr === false) ? true : false;
			text();
		} else {
			i--;
			window.setTimeout(reverse,50);
		}
	}
}

$(document).ready(main);