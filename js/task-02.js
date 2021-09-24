const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listLi=
ingredients.map(item => {
  let listEl = document.createElement('li')
  listEl.classList.add('item');
  listEl.textContent = item;
  return listEl
});
document.querySelector('#ingredients').append(...listLi)