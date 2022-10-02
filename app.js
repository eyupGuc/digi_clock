const container = document.querySelector(".container");
// console.log(container);
let amPm;
setInterval(() => {
  let hour = 14; //new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

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

  container.innerHTML = `<p>${time}</p> `;
}, 1000);
