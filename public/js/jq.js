var marker;
var test;
var temp;
// Naughty coding is good.

// FRONT-END STORAGE
// 

var days = [1];
var current_day = 1;

// hotels = [];
// restaurants = [];
// things = [];

var itiner = [
{
	day: 1,
	hotels: []
},
{
	day: 2,
	hotels: []
}]


var todays_obj = {
	day: current_day,
}

$(document).ready(function(){


	$('#daylist').on('click', '#add_day', function(){
		
		var new_day = days[days.length-1] + 1;
		days.push(new_day);	
		
		var plus = this;
		$(this).remove();

		$('#daylist').append('<button class="btn btn-circle day-btn">'+new_day+'</button>');
		console.log("plus: ",plus)

		$('#daylist').append(plus);
	})


	$('#daylist').on('click','.day-btn',function(){

		current_day = Number($(this).text());
		console.log("current_day: ",current_day);
		current_obj = itiner[current_day - 1]
		console.log("current_obj: ",current_obj);

		itiner.push(todays_obj);
		console.log("itiner: ",itiner);
		
		if(current_obj != -1){
			todays_obj = itiner[current_day - 1]
		} else {
			todays_obj = {
				day: current_day,
			}
		}
		console.log("todays_obj: ",JSON.stringify(todays_obj));

	});


	$('#hoteladd').click(function(){

		var select_hotel = $( "#myhotels option:selected" ).text();

		todays_obj.hotel = select_hotel

		$('#hotel_target').html('<ul class="list-group"><div class="itinerary-item"><span class="title">'+select_hotel+'</span><span class="remove"><button class="btn btn-danger btn-xs btn-circle pull-right">x</button></span></div></ul>');

		$('#hotel_target').on("click", ".remove", function(){
			$(this).parent().remove();
			marker.setMap(null);
		});

		var latLngStr = $( "#myhotels option:selected" ).attr("value");
		var latLngArr = latLngStr.split(',');
		console.log(latLngArr);

		if(marker){
			marker.setMap(null);
		}

		marker = new google.maps.Marker({
	        position: {lat: parseFloat(latLngArr[0]) , lng: parseFloat(latLngArr[1])},
	        map: map,
	        title:select_hotel
	    });

	});

	$('#restaurantadd').click(function(){
		var select_restaurant = $( "#myrestaurants option:selected" ).text();

		todays_obj.restaurants = [];

	});


	$('#thingadd').click(function(){
		var select_thing = $( "#things option:selected" ).text();

		todays_obj.things = [];

	});

});