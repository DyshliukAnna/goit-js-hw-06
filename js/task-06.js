const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (ev) => {
    if (ev.target.value.length !== 6) {

        return textInput.classList.add("invalid");
    }

    textInput.classList.remove("invalid");

    return textInput.classList.add("valid");
     
});