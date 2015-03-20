var marker;
// Naughty coding is good.

$(document).ready(function(){

	// alert("hello");

	$('#hoteladd').click(function(){
		var select_hotel = $( "#myhotels option:selected" ).text();
		$('#hotel_target').html('<ul class="list-group"><div class="itinerary-item"><span class="title">'+select_hotel+'</span><span class="remove"><button class="btn btn-danger btn-xs btn-circle pull-right">x</button></span></div></ul>');

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