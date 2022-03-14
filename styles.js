
const desc = document.getElementById('desc');
const temp = document.getElementById('temp');
// var city = document.querySelector('#city').innetText;
const TEMPERATURA = document.getElementById('temperature');
const URL_MAIN = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '2bfd9f65fdd2e0b8382e2779ac5cb440';
const UNITS = 'metric';
const TEMPO_MINIMO = document.getElementById('temp_min');
const TEMPO_MAXIMO = document.getElementById('temp_max')

console.log(city)
// navigator.geolocation.getCurrentPosition(loadUrl);

function buscar(){
    
    var city = document.getElementById('city').value;

    fetch(URL_MAIN+city+'&units='+UNITS+'&appid='+API_KEY)
    .then(response => response.json())
    .then(data => {
        let name = document.getElementById('name')
        let nameValue = data['name']
        let tempValue = data['main']['temp'];
        let descValue = data['weather'][0]['description'];
        let temp_minValue = data['main']['temp_min'];
        let temp_maxValue = data['main']['temp_max']

        name.innerText = nameValue
        desc.innerText = descValue
        temp.innerText = tempValue+"°c"
        TEMPO_MINIMO.innerText= "Tempo minímo: "+ temp_minValue + '°c'
        TEMPO_MAXIMO.innerText= "Tempo maxímo: "+ temp_maxValue + '°c'
    })
    .catch(err => alert("Wrong city name!"))
}

// async function fetchApi(url){
//     let response = await fetch(url);
//     let { main, name } = await response.json();
//     let temperature = (main.temp).toFixed(1);
//     city.innerText = `${name}:`;
//     TEMPERATURA.innerText= `${temperature} ºC`;
// }

