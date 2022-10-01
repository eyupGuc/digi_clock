const container = document.querySelector(".container");
// console.log(container);
let amPm;
setInterval(() => {
  let hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (hour < 13) {
    amPm = "AM";
  } else {
    amPm = "PM";
    hour = hour - 12;
    hour < 10 ? (hour = "0" + hour) : hour;
  }

  const time = `${hour} : ${minutes} :${seconds} ${amPm}`;

  container.innerHTML = `<p>${time}</p> `;
}, 1000);
