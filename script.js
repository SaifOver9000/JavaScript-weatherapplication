const API_KEY ="f34e47dc824777c234bbd77922b7bb53";
const API_URL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=wolfville";


async function checkWeather(){
    const response = await fetch(API_URL + `&appid=${API_KEY}`);
    var data = await response.json();

    console.log(data)
}