var weather = require("./weathernode");

var cities = process.argv;

var lengthOfParam = (cities.length-2)/2;

index = 2;
for (var i=0; i<lengthOfParam; i++)
{
	weather.get(cities[index], cities[index+1]);
	index +=2;
}