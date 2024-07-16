const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const title = document.querySelector('h1');

title.classList.add('title');

input.addEventListener('input', () => {
  output.textContent =
    input.value.trim() === '' ? 'Anonymous' : input.value.trim();
});
