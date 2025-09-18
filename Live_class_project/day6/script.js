const apiKey = "7ae2c7c317d9378ceaf0485acc1fed1c";

const q = s => document.querySelector(s);
const searchInput = q("#searchInput");
const tempEl = q("#temp");
const locationEl = q("span");
const feelsLikeEl = document.querySelectorAll("span")[1];
const windEl = document.querySelectorAll("span")[2];

function getWeather() {
  const query = searchInput.value.trim();
  if (!query) return;

  const isPin = /^\d+$/.test(query);
  const url = `https://api.openweathermap.org/data/2.5/weather?${isPin ? "zip=" + query + ",in" : "q=" + query}&appid=${apiKey}&units=metric`;

  fetch(url).then(r => r.json()).then(d => {
    if (d.cod != 200) {
      locationEl.innerText = "❌ City or PIN not found!";
      tempEl.innerText = feelsLikeEl.innerText = windEl.innerText = "--";
      return;
    }
    tempEl.innerText = `${d.main.temp}°C`;
    feelsLikeEl.innerText = `${d.main.feels_like}°C`;
    windEl.innerText = `${d.wind.speed} m/s`;
    locationEl.innerText = `${d.name}, ${d.sys.country}`;
  }).catch(() => locationEl.innerText = "⚠️ Something went wrong!");
}

q("#searchBtn").addEventListener("click", getWeather);
searchInput.addEventListener("keypress", e => e.key === "Enter" && getWeather());