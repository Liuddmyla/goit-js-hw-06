
const formEl = document.querySelector('.login-form');

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {

    event.preventDefault();
   
    const {
    elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {

        return alert("Увага! Всі поля повинні бути заповнені!");
    }; 
    
    const dataName = {
        email: email.value,
        password: password.value,
    };

    console.log(dataName);    

    event.currentTarget.reset();
};
