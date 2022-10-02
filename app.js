const clockTop = document.querySelector(".clockTop");
const clockMiddle = document.querySelector(".clockMiddle");
const clockBottom = document.querySelector(".clockBottom");

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const fetchWeather = async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=ankara&appid=e815a95d20a585101c219591fd494992&units=metric`
  );
  //
  const data = await res.json();
  console.log(data);
  const name = data.name;
  const temp = data.main.temp.toFixed(1);
  const humidity = data.main.humidity;
  const description = data.weather[0].main;
  console.log(description);
  console.log(humidity);
  console.log(temp);

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

    const time = `${hour} : ${minutes} :${seconds} ${amPm}`;

    clockTop.innerHTML = `<p>${time}</p> `;
    clockMiddle.innerHTML = `<table width="100%"><tr><th>degrees</th> <th>air</th> <th>humidity</th></tr><tr><td>${temp}</td> <td>${description}</td> <td>${humidity}</td></tr></table>`;
    clockBottom.innerHTML = `<table width="100%"><tr><th>month</th> <th>date</th> <th>day</th></tr><tr><td>${month}</td> <td>${dayOfTheRite}</td> <td>${day}</td></tr></table> <h2 style="margin:2rem;">${name}</h2>`;
  }, 1000);
};
fetchWeather();
