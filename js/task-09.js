function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");



function heandleColor(event) {
  document.body.style.backgroundColor = getRandomHexColor()
  spanColor.textContent = document.body.style.backgroundColor;
};

buttonChangeColor.addEventListener("click", heandleColor);


// const btnChangeColor = document.querySelector(".change-color");
// const btnText = document.querySelector(".color");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };

// btnChangeColor.addEventListener('click', () => {
//   document.body.style.backgroundColor = getRandomHexColor();
//   btnText.textContent = document.body.style.backgroundColor;
// });