$(document).ready(function (){
	var latitude;
	var longitude;
	var test;
	var tempInC;
	var tempInF;
	var weather;

	var tempIsC = true;


	//html geolocation that gives user's infor of current location (code from FCC tutorial)
 	 if (navigator.geolocation) {
 		navigator.geolocation.getCurrentPosition(function(position) {
    	latitude = position.coords.latitude;
    	longitude = position.coords.longitude;
    	getInfo();
 		});

	}


	function getInfo(){
		$.ajax({
			url: 'https://fcc-weather-api.glitch.me/api/current?',
			data: {
				lat:latitude,
				lon:longitude 
			},

			success: function(data) {
				$(".location").html(data.name + ", " + data.sys.country);
				tempInC = data.main.temp.toFixed(1);
				$(".temp").html(tempInC);
				$(".unit").html(" °C");
				weather = data.weather[0].main;
				$(".weather").html(weather);
				tempInF = (tempInC*9/5 + 32).toFixed(1);

			}	
		});
	}

	function tempConversion(){
		if(tempIsC) {
    		$(".temp").html(tempInF);
    		$(".unit").html(" °F");
    		tempIsC = false;
    	}
    	else {
		$(".temp").html(tempInC);
		$(".unit").html(" °C");
			tempIsC = true;	
		}
	}

    $(".unit").on("click", function(){
    	tempConversion();
	});



	//different style of calling ajax. this function will result the same as the upper method.
	/*	function getInfo(){
			$.ajax({
				url: 'https://fcc-weather-api.glitch.me/api/current?lat='+latitude+'&lon='+longitude,

				success: function(data) {

						alert(data.weather[0].main);
				}	
			});
		}
	*/

});

