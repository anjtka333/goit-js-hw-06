document.querySelector("input").addEventListener('blur', (e) => {
    e.currentTarget.classList.remove("valid", 'invalid')
    if (+e.currentTarget.dataset.length === e.currentTarget.value.length) {
        e.currentTarget.classList.add('valid');
    }
    else  {
        e.currentTarget.classList.add('invalid');
    }
})