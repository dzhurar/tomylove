// timers
// started dating
function timerAfter(date) {
  const now = new Date().getTime();
  const then = new Date(date);
  const diff = now - then;
  document.getElementById("timeTogether").textContent = `${String(
    Math.floor(diff / (1000 * 60 * 60 * 24))
  ).padStart(2, "0")}:${String(
    Math.floor((diff / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0")}:${String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  )}:${String(Math.floor((diff / 1000) % 60)).padStart(2, "0")}`;
}

setInterval(() => {
  timerAfter("2021-11-08T00:00:00");
}, 1000);

// time before
function timerBefore(date, target) {
  const now = new Date().getTime();
  const need = new Date(date).getTime();
  const diff = need - now;
  target.textContent = `${String(
    Math.floor(diff / (1000 * 60 * 60 * 24))
  ).padStart(2, "0")}:${String(
    Math.floor((diff / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0")}:${String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  )}:${String(Math.floor((diff / 1000) % 60)).padStart(2, "0")}`;
}
// before anniversary
setInterval(() => {
  const target = document.getElementById("timeToAnniversary");
  const year = new Date().getFullYear();
  if (new Date().getTime() > new Date(`${year}-11-08T00:00:00`).getTime()) {
    timerBefore(`${year + 1}-11-08T00:00:00`, target);
  } else if (new Date().getTime() < new Date(`${year}-11-08T00:00:00`).getTime()) {
    timerBefore(`${year}-11-08T00:00:00`, target);
  }
}, 1000);
// before Sasha birthaday
setInterval(() => {
  const target = document.getElementById("timeToShura");
  const year = new Date().getFullYear();
  if (new Date().getTime() > new Date(`${year}-08-25T00:00:00`).getTime()) {
    timerBefore(`${year + 1}-08-25T00:00:00`, target);
  } else if (new Date().getTime() < new Date(`${year}-08-25T00:00:00`).getTime()) {
    timerBefore(`${year}-08-25T00:00:00`, target);
  }
}, 1000);
// before Roma birthaday
setInterval(() => {
  const target = document.getElementById("timeToRoma");
  const year = new Date().getFullYear();
  if (new Date().getTime() > new Date(`${year}-05-26T00:00:00`).getTime()) {
    timerBefore(`${year + 1}-05-26T00:00:00`, target);
  } else if (new Date().getTime() < new Date(`${year}-05-26T00:00:00`).getTime()) {
    timerBefore(`${year}-05-26T00:00:00`, target);
  }
}, 1000);
