$(document).ready(function() {

	$("#owl-bouquets").owlCarousel({
	/*	autoPlay: 3000, //Set AutoPlay to 3 seconds */
		lazyLoad : true,
		singleItem : true,
		autoHeight : true,
		transitionStyle:"fade",
		jsonPath : 'data.json',
 		jsonSuccess : customDataSuccess
	});
	
	function customDataSuccess(data){
		var content = "";
		for(var i in data["items"]){
			var img = data["items"][i].img;
			var desc = data["items"][i].desc;
			//console.log(img);
 			content += "<img class=\"lazyOwl\" data-src=\""img"\" alt=\"Букет\"><div class=\""desc"\">desc</div>";
		}
	$("#owl-bouquets").html(content);
	}
});