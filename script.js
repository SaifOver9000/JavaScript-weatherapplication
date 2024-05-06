document.addEventListener("DOMContentLoaded", function() {
    // DOMContentLoaded event listener to ensure the code runs after the HTML document has been completely loaded

    const API_KEY ="f34e47dc824777c234bbd77922b7bb53";
    const API_URL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    /**
     * Fetches weather data for a given city and updates the HTML elements with the weather information.
     * @param {string} city - The name of the city for which weather data is to be fetched.
     * @returns {Promise<void>} - A promise that resolves once the weather data is fetched and the HTML elements are updated.
     */
    async function checkWeather(city){
        // Function to fetch weather data for a given city

        const response = await fetch(API_URL + city +`&appid=${API_KEY}`);
        // Fetches weather data from the OpenWeatherMap API using the provided city name and API key

        var data = await response.json();
        // Parses the response data as JSON

        console.log(data)

        // Updates the HTML elements with the weather information
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // Sets the weather icon based on the weather condition
        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        // ... and so on for other weather conditions

        document.querySelector(".weather").style.display = "block";
        // Displays the weather information by setting the display property of the weather element to "block"
    }

    searchBtn.addEventListener("click", () => {
        // Event listener for the search button click

        checkWeather(searchBox.value);
        // Calls the checkWeather function with the value entered in the search input box
    });
});
