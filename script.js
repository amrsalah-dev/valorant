const theme = document.querySelector(".theme");
const body = document.querySelector("body");
let themeChange = () => {
  document.querySelector("body").classList.toggle("light");
  if (body.classList.contains("light")) {
    theme.innerHTML = `<i class="fa-sharp fa-solid fa-sun"></i>`;
  } else {
    theme.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
};
theme.addEventListener("click", themeChange);
