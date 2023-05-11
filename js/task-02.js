const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const newArr = [];

ingredients.forEach((ingredient) => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  newArr.push(item);
});

list.append(...newArr);


