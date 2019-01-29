function higlightItem() {
    $(this).addClass("highlight");
}

$("*").mouseenter(higlightItem);
$("*").mouseleave(function(){
    $(this).removeClass("highlight");
});

var active = $(".active").first();

$("#about").mouseenter(function(event){
    active.text("About Section");
});

$("#contact").mouseenter(function(event){
    active.text("Contact Section");
});

$("header").mouseenter(function(event){
    active.text("Home Section");
});

var calgary = {
    long: -114.0708,
    lat: 51.0486,
    population: 1096833,
    area: 825.29,
    name: "Calgary"
};

var edmonton = {
    long: -113.4909,
    lat: 53.5444,
    population: 960015,
    area: 684.37,
    name: "Edmonton"
};

var cities = [calgary, edmonton];
var city_info = $(".city-info").first();


$('#calgary').mouseenter(function () {
    var city = calgary;
    var density = city.population / city.area;
    city_info.html(
        "<br> Name            : " + city.name +
        "<br> Population : " + city.population +
        "<br> Longitude  : " + city.long +
        "<br> Latitude   : " + city.lat +
        "<br> Area       : " + city.area + "Sq KM" +
	"<br> Density    : " + density);


});

$('#edmonton').mouseenter(function(){
    var city = edmonton;

    var density = city.population / city.area;
    city_info.html(
        "<br> Name            : " + city.name +
        "<br> Population : " + city.population +
        "<br> Longitude  : " + city.long +
        "<br> Latitude   : " + city.lat +
        "<br> Area       : " + city.area + "Sq KM" +
	"<br> Density    : " + density);});
