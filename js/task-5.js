const body = document.querySelector('body');
const output = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', handleClick);

function handleClick() {
  body.style.backgroundColor = output.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
