function toggleTheme() {
  const body = document.body;
  if (body.classList.contains("theme-feminine")) {
    body.classList.remove("theme-feminine");
    body.classList.add("theme-masculine");
    body.style.backgroundImage = 'url(../imgs/pipi.jpg)';
  } else {
    body.classList.remove("theme-masculine");
    body.classList.add("theme-feminine");
    body.style.backgroundImage = 'url(../imgs/flower-bg.jpg)';
  }
}



const heroQuote = document.getElementById("heroQuote");


// modal
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("registerModal");
openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
