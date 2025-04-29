function toggleTheme() {
  const body = document.body;
  if (body.classList.contains("theme-feminine")) {
    body.classList.remove("theme-feminine");
    body.classList.add("theme-masculine");
    body.style.backgroundImage = "url(imgs/pipi.jpg)";
  } else {
    body.classList.remove("theme-masculine");
    body.classList.add("theme-feminine");
    body.style.backgroundImage = "url(imgs/flower-bg.jpg)";
  }
}

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
    modalText.textContent = `Впиши свой ник, он будет отображаться в некоторых элементах, а ещё в зависимости от него, будет меняться тема сайта.`;
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
      localStorage.setItem('userData', JSON.stringify({naming}))
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
  openModalBtn.textContent = `${JSON.parse(localStorage.getItem('userData')).naming}`;

  // const userName
});
