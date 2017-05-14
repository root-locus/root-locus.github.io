$(document).ready(function() {

	var url = window.location.href.split("/");
	var curPage = url[url.length-1].split(".")[0];
	curPageJSON = curPage + ".json";
	curPageId = "div#owl-"+curPage;

	$.getJSON(curPageJSON, function(data) {
	    $.each(data.owl, function(i,f) {
	        $(curPageId).append(f.item);
	    });
	});

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
});