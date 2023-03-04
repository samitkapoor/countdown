const randomBackgroundAPI = "https://picsum.photos/3840/2160/";

const backgroundImage = document.getElementById("backgroundImage");
backgroundImage.addEventListener("load", () => {
  backgroundImage.style.opacity = 1;
});

fetch(randomBackgroundAPI).then((response) => {
  const backgroundImageEle = document.getElementById("backgroundImage");
  backgroundImageEle.setAttribute("src", `${response.url}`);
});

function setCountdown() {
  setTimeout(setCountdown, 1);
  const monthEle = document.getElementById("month-val");
  const dayEle = document.getElementById("day-val");
  const hourEle = document.getElementById("hour-val");
  const minuteEle = document.getElementById("minute-val");
  const secondEle = document.getElementById("second-val");

  const daysInMonth = "31 28 31 30 31 30 31 31 30 31 30 31".split(" ");

  const currDate = new Date();

  const endMonth = 12;
  const endDate = daysInMonth[currDate.getMonth()];
  const endHour = 23;
  const endMinute = 59;
  const endSecond = 59;

  const monthsRemaining = endMonth - currDate.getMonth();
  monthEle.innerText = monthsRemaining;

  const dateRemaining = endDate - currDate.getDate();
  dayEle.innerText = dateRemaining;

  const hourRemaining = endHour - currDate.getHours();
  hourEle.innerText = hourRemaining;

  const minuteRemaining = endMinute - currDate.getMinutes();
  minuteEle.innerText = minuteRemaining;

  const secondRemaining = endSecond - currDate.getSeconds();
  secondEle.innerText = secondRemaining;
}
