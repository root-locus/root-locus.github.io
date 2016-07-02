$(function() {
	
	var menuItems = ["#id1", "#id2", "#id3", "#id4", "#id5", "#id6"];
	var clikedItem = "";

	$("#lock").click(function (event) {
		$("div.sky").css({
			'-webkit-animation-play-state': 'running', 'animation-play-state': 'running'
		});
		$("div.menu").css({
			'-webkit-animation-play-state': 'running', 'animation-play-state': 'running'
		});
		$("div.gate").css({
			'-webkit-animation-play-state': 'running', 'animation-play-state': 'running'
		});
		$("h1").css({'color': 'lightgrey'})
	});

	$(document).click(function (event) {
		var clickedParents = $(event.target).parents('.flip-container');
		if ( clikedItem ) {
			for (var i in menuItems) {
				$(menuItems[i]).css({"opacity": "1"});
				$(menuItems[i]+"-front").css({"cursor": "pointer"});
				if ( clikedItem === menuItems[i] ) {
					document.querySelector(menuItems[i]).classList.toggle("flip");
					$(menuItems[i]).css({'transform': 'initial', 'z-index': '1' });
				};
			};
			clikedItem = "";	
		} else if ( clickedParents[0] ) {
			for (var i in menuItems) {
				if ( menuItems[i] !== "#"+clickedParents[0].id ) {
					$(menuItems[i]).css({"opacity": "0.2"});
					$(menuItems[i]+"-front").css({"cursor": "default"});
				} else {
					clikedItem = "#"+clickedParents[0].id;
					document.querySelector(menuItems[i]).classList.toggle("flip");
					$(clikedItem).css({"z-index": "2"});
				};
			};
		};
	});
});
