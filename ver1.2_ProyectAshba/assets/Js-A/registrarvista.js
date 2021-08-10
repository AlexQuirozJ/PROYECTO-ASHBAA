const formRegister = document.getElementById('formRegister');

formRegister.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  const surname = document.getElementById('surname');
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  if (name.value == '') {
    nameError.innerHTML = 'Error, el nombre no debe estar vacío';
  }

  if (surname.value == '') {
    nameError.innerHTML = 'Error, el nombre no debe estar vacío';
  }

  if (username.value == '') {
    nameError.innerHTML = 'Error, el nombre no debe estar vacío';
  }

  if (email.value == '') {
    emailError.innerHTML = 'Error, la contraseña no debe estar vacía';
  }

  if (password.value == '') {
    passwordError.innerHTML = 'Error, el email no debe estar vacío';
  }

  if (name.value != '' && email.value != '' && password.value != '') {
    fetch('https://dry-thicket-77170.herokuapp.com/users/', {
      method: 'POST',
      body: JSON.stringify({
        name: name.value,
        surname: surname.value,
        username: username.value,
        email: email.value,
        password: password.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((resp) => {
      if (resp.status == 200) {
        passwordError.innerHTML =
          'Registro correcto. Por favor, inicia sesión.';
      } else {
        passwordError.innerHTML =
          'El usuario ya está registrado, por favor, ingresa tus datos nuevamente o inicia sesión.';
      }
    });
  }
});
