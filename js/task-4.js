const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email.trim() === '' || password.trim() === '') {
    return alert('All form fields must be filled in');
  }

  const newUser = {
    email: email.trim(),
    password: password.trim(),
  };

  console.table(newUser);
  form.reset();
}
