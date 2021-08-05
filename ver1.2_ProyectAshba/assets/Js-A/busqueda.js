const f_alerta = document.getElementById('alerta');
const V_busqueda = document.getElementById('btn_busqueda');
const productosMostrados = document.getElementById('productosMostrados');
const formularioBusqueda = document.querySelector('form');

let busqueda = document
  .getElementById('btn_busqueda')
  .addEventListener('click', () => {
    let input_busqueda = document.getElementById('label').value;

    //Validación de barra de búsqueda
    if (input_busqueda === '') {
      //Si el campo de búsqueda está vacío, la página devuelve un mensaje de error
      MostrarMensaje('Por favor ingresa texto en el campo de busqueda');
    } else {
      //Si contiene información, corre la función de búsqueda
      //Aquí está la versión hardcodeada de la página de respuesta
      //V_busqueda.href= "resBusquedaS.html"

      //Se agrega un evento a la barra de búsqueda
      formularioBusqueda.addEventListener('submit', (e) => {
        e.preventDefault();
        productosMostrados.innerHTML = '';
        const search = document.getElementById('search');
        let busqueda = search.value;

        //Guardamos en local storage el elemento de búsqueda
        localStorage.setItem(busqueda);
        //Y lo redirigimos a la página donde se desplegará la información
        url = window.location;

        path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1);

        location.href = path + 'respuestaFetch.html';

        cargarProductos(busqueda);
      });
      //Se llama el método de la API de productos y se coloca al final el valor de la búsqueda
      const cargarProductos = async (busqueda) => {
        try {
          const res = await fetch(
            `http://localhost:8080/products/query/?name=${busqueda}`
          );
          //console.log(`http://localhost:8080/products/query/?name=${busqueda}`);

          let productosLista = await res.json();
          displayProductos(productosLista);
        } catch (err) {
          console.error(err);
        }
      };

      //Se crea el elemento "card" en el que se recibirá la información devuelta por la API
      const displayProductos = (products) => {
        const htmlString = products
          .map((product) => {
            return `
      <div class="container producto">
          
              <div class="card mx-auto">
            <a href="${product.link_pagina}">
            <img class="imagen-contenedor" src="${product.imagen}" id="imgAPI">
          </a>
            <p style="font-family: Verdana, Geneva, Tahoma, sans-serif;">${product.name}</p>
          <h5 style="font-family: Verdana, Geneva, Tahoma, sans-serif;"><strong>${product.tienda}</strong></h5>
            <p style="color: red"><b>$${product.precio}.00</b></p>            
        </div>
        </div>
        `;
          })
          .join('');
        productosMostrados.innerHTML = htmlString;
      };
    }
  });

function MostrarMensaje(msj) {
  //Se crea una alerta con el mensaje de error
  const alerta = document.createElement('P');
  alerta.textContent = msj;
  alerta.classList.add('error');
  f_alerta.appendChild(alerta);
  //Se fija tiempo de duración del mensaje
  setTimeout(() => {
    alerta.remove();
  }, 6000);
}
