const sreachInput = document.getElementById("sreach-input");

const city = document.getElementById("city");
const contry = document.getElementById("contry");

const weatherIcon = document.querySelector("img");

const temperatureDec = document.querySelector(".temperature-dec p");
const temperatureShort = document.querySelector(".temperature-short p");

const Vision = document.querySelector("#Vision p");
const Wind = document.querySelector("#Wind p");
const Humidity = document.querySelector("#Humidity p");
const Pressure = document.querySelector("#Pressure p");

const time = document.querySelector("#time");

const sunrise = document.getElementById("box-sunrise");
const sunset = document.getElementById("box-sunset");

setInterval(() => {
  time.textContent = moment().format("H:mm:ss");
}, 1000);

sreachInput.addEventListener("change", (e) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&units=metric&appid=2c9d5adf1c05e9c7f7c1e05e878a560a&lang=vi&units=metric `
  ).then(async (res) => {
    const data = await res.json();
    console.log(data);
    city.textContent = data.name;
    contry.textContent = data.sys.country;

    temperatureDec.textContent = Math.round(data.main.temp);
    temperatureShort.textContent = data.weather[0].description;

    weatherIcon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );

    Vision.textContent = data.visibility;
    Humidity.textContent = data.main.humidity;
    Wind.textContent = data.wind.speed;
    Pressure.textContent = data.main.pressure;

    sunrise.textContent = moment.unix(data.sys.sunrise).format("H:mm");

    sunset.textContent = moment.unix(data.sys.sunset).format("H:mm");
  });
});

sreachInput.addEventListener("click", () => {
  sreachInput.classList.add("hide");
});
sreachInput.addEventListener("dblclick", () => {
  sreachInput.classList.remove("hide");
});

const updateTitle = () => {
  const inputValue = document.getElementById("sreach-input").value;
  document.title = inputValue;
};
const inputElement = document.getElementById("sreach-input");
inputElement.addEventListener("input", updateTitle);
