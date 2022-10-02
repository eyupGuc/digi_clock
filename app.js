// const container = document.querySelector(".container");
const clockTop = document.querySelector(".clockTop");
const clockMiddle = document.querySelector(".clockMiddle");
const clockBottom = document.querySelector(".clockBottom");

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
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
  const description = data.weather[0].description;
  console.log(description);
  console.log(humidity);
  console.log(temp);
};
fetchWeather();

// const data = await res.json();

let amPm;
setInterval(() => {
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let year = new Date().getFullYear();
  const day = days[new Date().getDay()];
  const month = new Date().getMonth() + 1;
  const dayOfTheRite = new Date().getDate();
  // console.log(dayOfTheRite);
  // console.log(month);
  // console.log(day);

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

  // hour < 13 ? (amPm = "AM" && hour) : (amPm = "PM" && (hour = hour - 12));
  // amPm = "AM" ? (hour = "0" + hour) : hour;

  // if (hour < 13) {
  //   amPm = "AM";
  //   hour;
  // } else {
  //   amPm = "PM";
  //   hour = hour - 12;
  //   hour < 10 ? (hour = "0" + hour) : hour;
  // }

  const time = `${hour} : ${minutes} :${seconds} ${amPm}`;

  clockTop.innerHTML = `<p>${time}</p> `;
  clockBottom.innerHTML = `<table><tr><th>month</th> <th>date</th> <th>day</th></tr><tr><td>${month}</td></tr></table>`;
  clockMiddle.innerHTML = `<p>${year}</p>`;
}, 1000);
