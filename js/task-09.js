function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const widgetBtn = document.querySelector('.widget .change-color');

widgetBtn.addEventListener('click', (e) => {
  document.querySelector('.color').textContent = getRandomHexColor();
  document.querySelector('body').style.backgroundColor = document.querySelector('.color').textContent;
})