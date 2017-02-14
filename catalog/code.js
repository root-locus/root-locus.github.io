$(document).ready(function() {

	$(".fancybox-thumbs").fancybox({
		afterShow: function() {
			$(".fancybox-title").wrapInner('<div />').show();
			$(".fancybox-wrap").hover(function() {
				$(".fancybox-title").show();
			}, function() {
				$(".fancybox-title").hide();
			});
		},
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
        	overlay : {
            	css : {
                	'background' : 'rgba(58, 42, 45, 0.95)'
            	}
        	},
			thumbs	: {
				width	: 50,
				height	: 50
			},
			title: {
				type: 'over'
			}
		}
	});

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

	$("#owl-simple").owlCarousel({
		lazyLoad : true,
		//singleItem : true,
		//autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'simple.json'
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

	$("#owl-handmade").owlCarousel({
		lazyLoad : true,
		//singleItem : true,
		//autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'handmade.json'
	});

	$("#owl-dried").owlCarousel({
		lazyLoad : true,
		//singleItem : true,
		//autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'dried.json'
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

	$("#owl-official").owlCarousel({
		lazyLoad : true,
		//singleItem : true,
		//autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'official.json'
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