var marker;
var test;
var temp;
// Naughty coding is good.

$(document).ready(function(){

	// alert("hello");

	$('#hoteladd').click(function(){
		var select_hotel = $( "#myhotels option:selected" ).text();
		$('#hotel_target').html('<ul class="list-group"><div class="itinerary-item"><span class="title">'+select_hotel+'</span><span class="remove"><button class="btn btn-danger btn-xs btn-circle pull-right">x</button></span></div></ul>');


		// $('.remove').on("click", function(){
		// 	console.log("a remove button was clicked");

		// })
		$('#hotel_target').on("click", ".remove", function(){
			// event.preventDefault();
			self = this;
			temp = event.target;
			console.log("this: ",self);
			console.log("parent: ",self.parentNode);
			
			// var item = $('self').parent();
			$(this).parent().remove();
			// console.log(item);
			// item.setAttribute("remove", "yes")

			/*item.className("itinerary-item-remove");
			$('.itinerary-item-remove').remove();		
			
			console.log("grandparent: ",self.parentNode.parentNode);
			console.log("greatgrandparent: ",self.parentNode.parentNode.parentNode);
			//console.log(self.parentNode.parentNode.parentNode);
			var pops = self.parentNode.parentNode.parentNode
			pops.removeChild();*/

			// console.log("prev sibling: ", this.prev().prev());
			// console.log(self.sibling());

			marker.setMap(null);

		});



		var latLngStr = $( "#myhotels option:selected" ).attr("value");
		var latLngArr = latLngStr.split(',');
		console.log(latLngArr);

		// var geo = new google.maps.LatLng(latLngStr);
		// console.log(geo.toString());
		if(marker){
			marker.setMap(null);
		}

		marker = new google.maps.Marker({
	        position: {lat: parseFloat(latLngArr[0]) , lng: parseFloat(latLngArr[1])},
	        map: map,
	        title:select_hotel
	    });
		
		// marker.setMap(map);

	});


	$('#restaurantadd').click(function(){
		var select_restaurant = $( "#myrestaurants option:selected" ).text();		
	});


	$('#thingadd').click(function(){
		var select_thing = $( "#things option:selected" ).text();		
	});

	


});