const f_alerta = document.getElementById('alerta'); //traer el div que mostrará mensaje
const formularioBusqueda = document.querySelector('form'); //traer la form
const search = document.getElementById('label'); //traer el input de busqueda

//Se crea un evento en la forma, para que al hacer submit, haga la funcion
formularioBusqueda.addEventListener('submit', (e) => {
  let busqueda = search.value; //nos traemos el valor del input
  e.preventDefault(); //Se previene la acción por defecto

  //Condicional, si búsqueda no está vacía, se activa la redirección, en caso contrario, se muestra una alerta
  if (busqueda != '') {
    //Guardamos en local storage el elemento de búsqueda
    localStorage.setItem('busqueda', busqueda);
    //Y lo redirigimos a la página donde se desplegará la información
    url = window.location;

    path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1);
    location.href = path + 'respuestaFetch.html';
  } else {
    MostrarMensaje('Por favor ingresa texto en el campo de busqueda');
  }

  //Función para mostrar mensaje de alerta
  function MostrarMensaje(msj) {
    const alerta = document.createElement('P'); //se crea el elemento
    alerta.textContent = msj; //se añadirá contenido
    alerta.classList.add('error');
    f_alerta.appendChild(alerta); //se anexa al html
    setTimeout(() => {
      alerta.remove();
    }, 6000); //se pone temporizador
  }
});
