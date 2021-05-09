var x = document.getElementById("demo");
//location of browser

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showWeather);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
   
  }
}
// show weather and get data from openweathermap
/**
 * 
 * @param {*} position 
 */
function showWeather(position) {

  var xmlhttp = new XMLHttpRequest(),
  method = 'GET';
//key from key.js
url = 'http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&appid='+key
xmlhttp.open(method, url);
xmlhttp.onload = function () {
  // data to object
 const data =JSON.parse(xmlhttp.response);
  //data to json String
  var myJsonString = JSON.stringify(data);
 //interesting Json object attributes
 var location = data.name
 var sky=data.weather[0].description
 var temperatur=(data.main.temp)-273
 var windspeed=data.wind.speed
  //Ausgabe
  console.log(data)
  document.write('<h1>Wetterinformation</h1>')
  //Table
  var table='';
//Table head
table+='<tr>'
   table+= '<th>'+"Wetter"+'</th>'
   table+='<th>'+"Wert"+'</th>'
  table+='</tr>'
 //first row
  table +='<tr>'
    table +='<td>'+"Standort"+'</td>';
    table +='<td>'+location+'</td>';
    table +='</tr>'
  //2nd row
  table +='<tr>'
    table +='<td>'+"Temperatur in Grad Celsius"+'</td>';
    table +='<td>'+temperatur+'</td>';
    table +='</tr>'
    //3rd row
    table +='<tr>'
    table +='<td>'+"Himmel"+'</td>';
    table +='<td>'+sky+'</td>';
    table +='</tr>'
    //4th row
    table +='<tr>'
    table +='<td>'+"Windgeschwindigkeit"+'</td>';
    table +='<td>'+windspeed+'</td>';
    table +='</tr>'
    document.write('<table id="myTable" border=1>'+table+'</table>')


};
xmlhttp.send();
}


