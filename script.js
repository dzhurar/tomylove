import { reasons } from "./res/reasons.js";
// theme
document.addEventListener("DOMContentLoaded", () => {
  const themes = ["theme-feminine", "theme-masculine"];
  const theme = themes[Math.floor(Math.random() * themes.length)];
  const body = document.body;
  body.classList.add(`${theme}`);
  if (body.classList.contains("theme-feminine")) {
    body.style.backgroundImage = "url(imgs/flower-bg.jpg)";
  } else if (body.classList.contains("theme-masculine")) {
    body.style.backgroundImage = "url(imgs/pipi.jpg)";
  }
});

// function toggleTheme() {
//   const body = document.body;
//   if (body.classList.contains("theme-feminine")) {
//     body.classList.remove("theme-feminine");
//     body.classList.add("theme-masculine");
//     body.style.backgroundImage = "url(imgs/pipi.jpg)";
//   } else {
//     body.classList.remove("theme-masculine");
//     body.classList.add("theme-feminine");
//     body.style.backgroundImage = "url(imgs/flower-bg.jpg)";
//   }
// } //возможность соасть хууп
const heroQuote = document.getElementById("heroQuote");
// modal
document.addEventListener("DOMContentLoaded", () => {
  let userData = JSON.parse(localStorage.getItem("userData")) || [];
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModal");
  const modal = document.getElementById("registerModal");

  const modalText = document.getElementById("modalText");
  const modalInput = document.getElementById("modalInput");

  openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    modalText.textContent = `Впиши свой ник, он будет отображаться в некоторых элементах.`;
  });
  closeModalBtn.addEventListener("click", () => {
    if (modalInput.value.length < 2) {
      modalText.textContent = `Слишком короткий ник, сделай длиннее)`;
    } else if (modalInput.value.length > 20) {
      modalText.textContent = `Слишком длинный ник, сделай короче)`;
    } else {
      openModalBtn.textContent = `${modalInput.value}`;
      modalText.textContent = `Ты успешно поменяла ник на - ${modalInput.value}`;
      const naming = modalInput.value;
      localStorage.setItem("userData", JSON.stringify({ naming }));
      modalInput.value = "";
      setTimeout(() => {
        modal.style.display = "none";
      }, 2000);
    }
  });
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  openModalBtn.textContent = `${
    JSON.parse(localStorage.getItem("userData")).naming
    
  }`;
    document.querySelector('.forWho').textContent = `${JSON.parse(localStorage.getItem("userData")).naming}`;
});
document.addEventListener("DOMContentLoaded", () => {
  heroQuote.textContent = `${
    reasons[Math.floor(Math.random() * reasons.length)]
  }`;

});
