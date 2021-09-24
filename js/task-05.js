document.querySelector('#name-input').addEventListener('input', (e) => {
    document.querySelector('#name-output').textContent = e.currentTarget.value.length===0? 'Anonimuth': e.currentTarget.value;
})