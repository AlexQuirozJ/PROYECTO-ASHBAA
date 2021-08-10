const formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username');
  const password = document.getElementById('password');

  if (username.value == '') {
    nameError.innerHTML = 'Error, el nombre no debe estar vacío';
  }

  if (password.value == '') {
    passwordError.innerHTML = 'Error, el email no debe estar vacío';
  }

  if (username.value != '' && password.value != '') {
    fetch('https://dry-thicket-77170.herokuapp.com/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((resp) => {
      token = resp.headers.get('Authorization');

      console.log(token);

      if (token && token.includes('Bearer')) {
        console.log(token);
        localStorage.setItem('token', token);

        url = window.location;

        path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1);

        location.href = path + 'perfiluser.html';
      } else {
        localStorage.removeItem('token');
        usernameError.textContent = 'Usuario o contraseña inválido';
      }
    });
  }
});
