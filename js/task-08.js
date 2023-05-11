
// const form = document.querySelector(".login-form");

// function handleSubmit (event) {
//     event.preventDefault();
//     const email = event.currentTarget.elements.email.value;
//     const password = event.currentTarget.elements.password.value;
//     if (email.value === "" || password.value === "") {
//         return alert("Будь ласка заповніть усі поля");
//     }
//     const formData = {
//     email,
//     password,
//   };
    

//     console.log(formData);
//     event.currentTarget.reset();
// }
// form.addEventListener("submit", handleSubmit);

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {                    
    event.preventDefault();
    const { email, password } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Будь ласка заповніть усі поля");
    }

    const userData = {
        email,
        password,
    };
    console.log(userData);
    event.currentTarget.reset();
}