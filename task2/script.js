var all = document.getElementsByTagName("*");

function higlightItem(event) {
    var target = event.target;
    target.classList.add("highlight");
}

for (var i = 0, max = all.length; i < max; i++) {
    all.item(i).addEventListener("mouseenter", higlightItem);
    all.item(i).addEventListener("mouseleave", function(event) {
        event.target.classList.remove("highlight");
    });
}

var active = document.getElementsByClassName("active").item(0);

document.getElementById("about").addEventListener("mouseenter", function(event) {
    active.innerText = "About Section";
});

document.getElementById("contact").addEventListener("mouseenter", function(event) {
    active.innerText = "Contact Section";
});

document.getElementsByTagName("header").item(0).addEventListener("mouseenter", function(event) {
    active.innerText = "Home Section";
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
var city_info = document.getElementsByClassName("city-info").item(0);

document.getElementById("calgary").addEventListener("mouseenter", function(event) {
    var city = calgary;
    var density = city.population / city.area;
    city_info.innerHTML =
        "<br> Name            : " + city.name +
        "<br> Population : " + city.population +
        "<br> Longitude  : " + city.long +
        "<br> Latitude   : " + city.lat +
        "<br> Area       : " + city.area + "Sq KM" +
	"<br> Density    : " + density;
});

document.getElementById("edmonton").addEventListener("mouseenter", function(event) {
    var city = edmonton;
    var density = city.population / city.area;
    city_info.innerHTML =
        "<br> Name            : " + city.name +
        "<br> Population : " + city.population +
        "<br> Longitude  : " + city.long +
        "<br> Latitude   : " + city.lat +
        "<br> Area       : " + city.area + "Sq KM" +
	"<br> Density    : " + density;
});
