const inputValue = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");

inputValue.addEventListener("input", (event) => {
     if (inputValue.value === "") {
        return (outputValue.textContent = "Anonymous");
    };
  outputValue.textContent = event.currentTarget.value;
});

