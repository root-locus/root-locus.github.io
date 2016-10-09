$(document).ready(function() {
	$("#owl-bouquets").owlCarousel({
		lazyLoad : true,
		//singleItem : true,
		//autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'bouquets.json'
	});

	$("#owl-compositions").owlCarousel({
		lazyLoad : true,
		//singleItem : true,
		//autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'compositions.json'
	});

	$("#owl-pots").owlCarousel({
		lazyLoad : true,
		//singleItem : true,
		//autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'pots.json'
	});

	$("#owl-artificials").owlCarousel({
		lazyLoad : true,
		//singleItem : true,
		//autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'artificials.json'
	});

	$("#owl-decor").owlCarousel({
		lazyLoad : true,
		//singleItem : true,
		//autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'decor.json'
	});

	$("#owl-anniversaries").owlCarousel({
		lazyLoad : true,
		//singleItem : true,
		//autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'anniversaries.json'
	});

	$("#owl-misc").owlCarousel({
		lazyLoad : true,
		//singleItem : true,
		//autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'misc.json'
	});

	$("#owl-brides").owlCarousel({
		lazyLoad : true,
		//singleItem : true,
		//autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'brides.json'
	});


/*	function customDataSuccess(data){
		var content = "";
		for(var i in data["items"]){
			var img = data["items"][i].img;
 			content += "<img class=\"lazyOwl\" data-src=\""+img+"\" alt=\"Букет\"/>";
		}
	$("#owl-bouquets").html(content);
	}*/
});