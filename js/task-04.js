
let counter = 0;
// document.querySelector('button[data-action="decrement"]').addEventListener(
//     'click', () => {
//         document.querySelector('#value').textContent = --counter;
// });
// document.querySelector('button[data-action="increment"]').addEventListener(
//     'click', () => {
//         document.querySelector('#value').textContent = ++counter;
// });

document.querySelector('#counter').addEventListener('click', (e) =>
    {
    if (e.target.dataset.action === "decrement"){
        document.querySelector('#value').textContent = --counter;
}
    else if (e.target.dataset.action === "increment") {
        document.querySelector('#value').textContent = ++counter;
    }
})
    

