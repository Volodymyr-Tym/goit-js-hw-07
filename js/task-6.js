const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', checkInputAmount);
destroyBtn.addEventListener('click', destroyBoxes);

function checkInputAmount() {
  const amount = +input.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
}

function createBoxes(amount) {
  let newBox = '';
  let newBoxSize = 30;

  boxesContainer.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    newBox += `<div style='width: ${newBoxSize}px;  height: ${newBoxSize}px; background-color: ${getRandomHexColor()}'></div>`;

    newBoxSize += 10;
  }

  boxesContainer.innerHTML = newBox;
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
