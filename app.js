const clockTop = document.querySelector(".clockTop");
const clockMiddle = document.querySelector(".clockMiddle");
const clockBottom = document.querySelector(".clockBottom");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const fetchWeather = async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=ankara&appid=e815a95d20a585101c219591fd494992&units=metric`
  );
  //
  const data = await res.json();

  const name = data.name;
  const temp = data.main.temp.toFixed(1);
  const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg`;

  let amPm;
  setInterval(() => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let year = new Date().getFullYear();
    const day = days[new Date().getDay()];
    const month = new Date().getMonth() + 1;
    const dayOfTheRite = new Date().getDate();

    seconds < 10 ? (seconds = "0" + seconds) : seconds;
    minutes < 10 ? (minutes = "0" + minutes) : minutes;
    if (hour < 13) {
      amPm = "AM";
      if (hour < 10 && (amPm = "AM")) {
        hour = "0" + hour;
      }
    } else {
      hour = hour - 12;
      amPm = "PM";
    }

    clockTop.innerHTML = `<p><span>${amPm}</span> ${hour} : ${minutes} <span>${seconds} </span></p> `;

    clockMiddle.innerHTML = `<table width="100%"><tr><td>${temp}<sup>°C</sup></td> <td><img class="city-icon" src="${iconUrlAWS}"></td> <td>${data.main.pressure} hPa   </td></tr></table>`;
    clockBottom.innerHTML = `<table width="100%"></tr><tr><td>${dayOfTheRite}(${day})</td><td>/</td> <td>${month}</td><td>/</td> <td>${year}</td></tr></table> <p>${name}</p> `;
  }, 1000);
};
fetchWeather();
