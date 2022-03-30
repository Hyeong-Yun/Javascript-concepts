const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".button");
const closeBtn = document.querySelector(".closeBtn");
const modalContent = document.querySelector(".modal-content");

modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

modal.addEventListener("click", (e) => {
  modal.style.display = "none";
});

modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});
