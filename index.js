function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let now = new Date();
  let day = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${day} ${hours}:${minutes}`;
}

console.log(formatDate(new Date()));

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput.value}`;

  let units = "imperial";
  let apiKey = "829e518e881cf997d638d98ab22ef07c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=${units}&appid=${apiKey}`;

  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("h3");
    temperatureElement.innerHTML = `${temperature}°F`;
  }
  axios.get(`${apiUrl}`).then(showTemperature);
}

let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", search);
