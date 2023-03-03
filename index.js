// index.js

const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const password = event.target.password.value;
  // send AJAX request to authenticate user
});

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  // send AJAX request to register
