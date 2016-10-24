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

	$("#owl-dianthus").owlCarousel({
		lazyLoad : true,
		//singleItem : true,
		//autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'dianthus.json'
	});

	$("#owl-gerbera").owlCarousel({
		lazyLoad : true,
		//singleItem : true,
		//autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'gerbera.json'
	});

	$("#owl-hydrangea").owlCarousel({
		lazyLoad : true,
		//singleItem : true,
		//autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'hydrangea.json'
	});

	$("#owl-orchid").owlCarousel({
		lazyLoad : true,
		//singleItem : true,
		//autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'orchid.json'
	});

	$("#owl-roses").owlCarousel({
		lazyLoad : true,
		//singleItem : true,
		//autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'roses.json'
	});

	$("#owl-chrysan").owlCarousel({
		lazyLoad : true,
		//singleItem : true,
		//autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'chrysan.json'
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

	$("#owl-ny").owlCarousel({
		lazyLoad : true,
		//singleItem : true,
		//autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'ny.json'
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