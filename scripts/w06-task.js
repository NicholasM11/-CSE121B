alert("Hello, welcome to the weather app!, enter a city and hit enter");

const apiKey = "d26212ea3d424d9899f175813240904";

async function getWeather() {
  const city = document.getElementById("location").value;
  const encodedCity = encodeURIComponent(city);
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodedCity}&aqi=no`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const weatherContainer = document.getElementById("weatherContainer");
    weatherContainer.innerHTML = `
        <div class="w-full h-96 flex flex-col justify-start items-center">
          <div class="w-96">
            <h1 class="text-xl font-semibold text-white">${data.location.name}</h1>
            <div class="w-full flex justify-between items-center">
              <h1 class="text-8xl text-white font-semibold">${data.current.temp_f}°F</h1>
              <p class="-rotate-90 font-semibold text-white text-lg">${data.current.condition.text}</p>
            </div>
          </div>
        </div>
        <div class="w-full h-52 flex justify-center items-center mt-16">
          <div class="w-96 h-20 bg-black/50 text-white font-semibold rounded-xl flex justify-evenly items-center">
            <div class="flex flex-col justify-center items-center">
              <h1>${data.current.feelslike_f}°F</h1>
              <h2>Feels Like</h2>
            </div>
            <div class="flex flex-col justify-center items-center">
              <h1>${data.current.humidity}%</h1>
              <h2>Humidity</h2>
            </div>
            <div class="flex flex-col justify-center items-center">
              <h1>${data.current.wind_kph} km/h</h1>
              <h2>Wind</h2>
            </div>
          </div>
        </div>
      `;
    weatherContainer.classList.add("fade-in");
    setTimeout(() => {
      weatherContainer.classList.add("visible");
    }, 1000);
  } catch (error) {
    alert("Error:", error);
  }
}
