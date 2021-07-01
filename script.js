//api key 620e68748afbf0a197755980deb371b7

const APIKey ="&appid=620e68748afbf0a197755980deb371b7"

//Parameters var for search

let city = "";

//API call
const queryURL = "api.openweathermap.org/data/2.5/weather?q="  + city +  "&appid=" + APIKey;


$(document). ready(function(){
    //crete func for current conditons 
    function currCond(city){
        let queryURL "api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=" +APIKey;
        
        $.ajax({
            url: queryURL,
            method:"GET"
        }).then(function (response) {
           (response);
        }
        }
        function fiveDFore(city ) {
        let oneDayFortURL = "https://api.openweathermap.org/data/2.5/forecast?appid=" APIKey + city + "&count=10&units=imperial";

        $.getJSON(oneDayFortURL, function(fiveDFore){
            updateForecast(fiveDFore);
        });
        }
    }

    // get data 

    const temperature = $("Temperature: " + tempFC + " °F,°C");
    const humidity = $(("Humidity: " + "%");
    const wind = $("Wind Speed: " + windSpd + " MPH");
    //refer to https://proglogic.com/code/javascript/calculator/tempconverter.php
    function CelsiusConverter(){
        document.converter.fahrenheit.value = (document.converter.celsius.value * 9 / 5) + 32
        document.converter.kelvin.value = document.converter.celsius.value * 1 + 273.15
        }
    function FahrenheitConverter(){
        document.converter.celsius.value = (document.converter.fahrenheit.value - 32) * 5 / 9
        document.converter.kelvin.value=((document.converter.fahrenheit.value - 32)*5/9)+273.15
        }

    let temp = (results[i]FahrenheitConverter)
    let tempB = (results[i]CelsiusConverter)
    let tempF= Math.floor(temp)
    let tempC = Math.floor(tempB)
    
  //create if statement to update the background color of the UV Index
  const UV;
  
  function uvInd(UV)= parseInt(response.current.UV);
  //refer to https://stackoverflow.com/questions/65277224/how-to-set-a-css-property-background-color-dynamically-in-react 
  if ("UV <=3)").css({ "background-color": "green"});
  }else (UV >=4 && UV <=7 ) {
      $(".color").css({ "background-color": "yellow"});
  }else  (UV >=8 && UV <=11 ) {
      $(".color").css({ "background-color": "orange" });
  }
}

function {
    savCity = localStorage.setItem(city);

if(savCity !== null){

    const listCity = ("")
}

let date = new Date();
function saveSearch() {
$('#search').on('click', function() {
    event.preventDefault();
    let inquiry = $("#runSearch").val();
    cityHistory(inquiry, null);
   })
}
function finalData() {

    let i = 0; i < localStorage.length; i++) {   
        $('city' + i).text(localStorage.key(i));
        $('city' + i).on('click', function(event)
    }
    if(i == null){
        return= "";

    }

}

});