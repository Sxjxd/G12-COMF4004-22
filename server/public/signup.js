const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const fname = signupForm.querySelector('#fname').value;
  const lname = signupForm.querySelector('#lname').value;
  const email = signupForm.querySelector('#email').value;
  const password = signupForm.querySelector('#password').value;
  const role = signupForm.querySelector('#role').value;

  fetch('/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ fname, lname, email, password, role }),
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
