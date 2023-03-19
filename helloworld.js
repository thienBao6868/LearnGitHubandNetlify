const showName = document.querySelector("#showName");
const name = document.querySelector("#name");
showName.addEventListener("click", () => {
  name.textContent = "Le Cong Thien Bao";
  name.classList.add("style");
});
