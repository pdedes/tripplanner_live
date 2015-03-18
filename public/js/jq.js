
$(document).ready(function(){

	// alert("hello");

	$('#hoteladd').click(function(){
		var select_hotel = $( "#myhotels option:selected" ).text();
		$('#hotel_target').html('<ul class="list-group"><div class="itinerary-item"><span class="title">'+select_hotel+'</span><span class="remove"><button class="btn btn-danger btn-xs btn-circle pull-right">x</button></span></div></ul>');

		// initialize_gmaps.drawLocation([40.704350, -74.004350]);
		
	});


	$('#restaurantadd').click(function(){
		var select_restaurant = $( "#myrestaurants option:selected" ).text();		
	});


	$('#thingadd').click(function(){
		var select_thing = $( "#things option:selected" ).text();		
	});


});