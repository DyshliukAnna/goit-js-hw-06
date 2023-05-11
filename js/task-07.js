const inputValue = document.querySelector("#font-size-control");
const changeFontStyle = document.querySelector("#text");

inputValue.addEventListener("input", (event) => (changeFontStyle.style.fontSize = event.target.value + "px")

);




// const changer = () => {
//     changeFontStyle.style.fontSize = `${inputValue.value}px`;
// };

// fontSizeControler.addEventListener("input", changer);