// --- Making a big list of colours is stupid. Use the random colour generator from the video!

	// 	--------------------------------------------------------------------------------------------------------

	// var colourNames = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed ', 'Indigo ', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen'];

	// 	--------------------------------------------------------------------------------------------------------


	var clickTime; var createdTime; var reactionTime; var randomLeft; var randomTop; var randomColour; var randomHeight;

	function randomNumber(min, max) {
		return Math.random() * (max - min) + min;
	}

	/* 

	--------------------------------------------------------------------------------------------------------

	TO DO:

	- Randomize box colour 		- Completed on 22/12/2015
	- Randomize box size 		- Completed on 22/12/2015

	- Add function to make circles with random colour, size & position	- Completed on 22/12/2015 (PM)
	- Randomize selection of either makeCircle or makeBox functions		- Completed on 22/12/2015 (PM)

	--->	23/12/2015 	

			Watched video and edited makeBox() function to randomly add border radius.

			This is a better way of doing it, rather than writing out a whole new function to make circles
			and then another function to select between those two functions.

	--->

	--------------------------------------------------------------------------------------------------------

	*/

	function randomColour() {

		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.round(Math.random() * 15)];
		}
		return color;
	}

	function makeBox() {

		createdTime=Date.now();

		var x = randomNumber((randomNumber(250, 1500)), randomNumber(1500, 5000));

		var boxStyle = document.getElementById("box").style

		var widthHeight = Math.floor(randomNumber(100, 300)) + "px";

		if (Math.random() < 0.5) {
			boxStyle.borderRadius=widthHeight;
			
			} else {
			
			boxStyle.borderRadius="0px";

		}
		
		boxStyle.backgroundColor=randomColour();

		boxStyle.height=widthHeight;

		boxStyle.width=widthHeight;

		boxStyle.left=Math.floor(randomNumber(50, 500)) + "px";

		boxStyle.top=Math.floor(randomNumber(50, 500)) + "px";

		setTimeout(function() {

		boxStyle.display="block";

		createdTime=Date.now();

		}, x);

	}

	// -------------------------------------------------------

	// --->	It's simpler to just add border radius to randomly occur in the makeBox() function 
	// 		rather than writing out a whole new function for circles.

	// --------------------------------------------------------

	// function makeCircle() {

	// 	createdTime=Date.now();

	// 	var a = randomNumber((randomNumber(250, 1500)), randomNumber(1500, 5000));

	// 	var circleStyle = document.getElementById("circle").style

	// 	var widthHeight = Math.floor(randomNumber(100, 300)) + "px";

	// 	circleStyle.height=widthHeight;

	// 	circleStyle.width=widthHeight;

	// 	circleStyle.borderRadius=widthHeight;

	// 	circleStyle.backgroundColor=randomColour();

	// 	circleStyle.left=Math.floor(randomNumber(50, 500)) + "px";

	// 	circleStyle.top=Math.floor(randomNumber(50, 500)) + "px";

	// 	setTimeout(function() {

	// 	circleStyle.display="block";

	// 	createdTime=Date.now();

	// 	}, a);

	// }


	// function makeSomething() {

	// 	var circleBox = Math.floor(randomNumber(1, 10));

	// 	if (circleBox > 5) {
	// 		makeBox();
		
	// 	} else {
	// 		makeCircle();
		
	// 	}

	// }



	// ---------------------------------------------------------

	// ---> See above comment re: border radius / circles.

	// --------------------------------------------------------



	// document.getElementById("circle").onclick=function() {

	// 	clickedTime=Date.now()

	// 	reactionTime=(clickedTime-createdTime)/1000

	// 	document.getElementById("time").innerHTML=reactionTime

	// 	this.style.display="none";

	// 	makeSomething();

	// }

	// --------------------------------------------------------

	document.getElementById("box").onclick=function() {

		clickedTime=Date.now()

		reactionTime=(clickedTime-createdTime)/1000

		document.getElementById("time").innerHTML=reactionTime+" seconds"

		this.style.display="none";

		makeBox();

	}

	makeBox();