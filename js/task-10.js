function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let amountDiv = document.querySelector('#controls input').value;
let size = 30;
document.querySelector('button[data-create]').addEventListener('click', function (amound) {
  amound = document.querySelector('#controls input').value;
  let createdDiv = [];
  for (let i = 0; i < amound; i++) {
    let newDiv = document.createElement('div');
    newDiv.style.width = size + 'px';
    newDiv.style.height = size + 'px';
    newDiv.style.backgroundColor = getRandomHexColor();
    createdDiv.push(newDiv);
    size += 10;
  }
  document.querySelector('#boxes').append(...createdDiv)
  document.querySelector('#controls input').value = '';
});
document.querySelector('button[data-destroy]').addEventListener('click', function () {
  document.querySelector('#boxes').innerHTML = '';
})
