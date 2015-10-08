var d = new Date();
var weather = {
    time: 1444298150918,
    summary: "sonne",
    icon: "img/clear-day.png",
    humidity: 3,
    windspeed: 10,
    temperature: 23
}

function getCurrentData() {
    document.getElementById("actualdate").innerHTML = d.toLocaleDateString();
    document.getElementById("temperature").innerHTML = weather.temperature;
    document.getElementById("sunny").innerHTML = weather.icon;
    document.getElementById("summary").innerHTML = weather.summary;
    document.getElementById("humidity").innerHTML = weather.humidity + "%";
    document.getElementById("windspeed").innerHTML = weather.windspeed;
}

function previousDay() {
    document.getElementById("temperature").innerHTML = "12°C";
    document.getElementById("sunny").src = "img/rain.png";
    document.getElementById("summary").innerHTML = "regen";
    d.setDate(d.getDate() - 1);
    document.getElementById("actualdate").innerHTML = d.toLocaleDateString();
}

function nextDay() {
    document.getElementById("temperature").innerHTML = "30°C";
    document.getElementById("sunny").src = "img/rain.png";
    document.getElementById("summary").innerHTML = "regen";
    d.setDate(d.getDate() + 1);
    document.getElementById("actualdate").innerHTML = d.toLocaleDateString();
}

function convertWindspeed(speed, format) {
    return speed * 3.6;
}

function sidebar() {
    document.getElementById("sidebar").style.display = "block";
}

function sidebarClose() {
    document.getElementById("sidebar").style.display = "none";
}