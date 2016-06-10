var printWeather = function(cityname, countryname, weather){
	console.log("Weather of " + cityname + ", " + countryname + ": " + "Today's weather will primary be " + weather + ".");
};

var http = require("http");

function get(cityname, countryname)
{
	var request = http.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityname + "," + countryname + "&APPID=e86eb54dc2d3a402c495015e035d456b", function(response){

		var body = "";
		response.on("data", function(chunk){
			body += chunk;
		});
		response.on("end", function(){
			var weather = JSON.parse(body);
			printWeather(cityname, countryname, weather.weather[0].description);
		});

	});

	request.on("error", function(error){
		console.log(error.message);
	});
}

module.exports.get = get;