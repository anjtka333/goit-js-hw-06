
const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    //event current turget
    const formData = {
        email,
        password
    }
    console.log(formData);
    if (email===''||password==='') {
        alert("No empty fields");
    }
    event.currentTarget.reset()
    return formData;
}