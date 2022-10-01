const container = document.querySelector(".container");
console.log(container);
setInterval(() => {
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  const time = `${hour} : ${minutes} :${seconds}`;

  container.innerHTML = `<p>${time}</p>`;
}, 1000);
