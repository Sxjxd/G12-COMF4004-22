const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = loginForm.querySelector('#email').value;
  const password = loginForm.querySelector('#password').value;

  fetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Do something with the token (e.g. store it in local storage)
    })
    .catch((error) => {
      console.error(error);
    });
});
