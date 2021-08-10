const productosMostrados = document.getElementById('productosMostrados');
const formularioBusqueda = document.querySelector('form');
//Nos traemos la búsqueda del local storage
let busqueda = localStorage.getItem('busqueda') || null; //Esta se trae si se realizó la búsqueda por barra

//Generamos un evento para iniciar llamar la función de búsqueda
formularioBusqueda.addEventListener('submit', (e) => {
  e.preventDefault();
  const search = document.getElementById('label');
  let busqueda = search.value;
  cargarProductos(busqueda);
});

//Esta función es para la barra de búsqueda, llama la API y nos permite desplegar los productos que coincidadn con búsqueda
const cargarProductos = async (busqueda) => {
  try {
    const res = await fetch(
      `https://dry-thicket-77170.herokuapp.com/products/query/?name=${busqueda}`
    );
    console.log(
      `https://dry-thicket-77170.herokuapp.com/products/query/? name=${busqueda}`
    );

    let productosLista = await res.json();
    displayProductos(productosLista);
  } catch (err) {
    console.error(err);
  }
};

//si busqueda es true, entonces se activa la función de busqueda e inmediatamente se borra el elemento de local storage
if (busqueda) {
  cargarProductos(busqueda);
  localStorage.removeItem('busqueda');
}

//Esta función es la que nos permite anexar los productos al html en el formato que se necesita
const displayProductos = (products) => {
  const htmlString = products
    .map((product) => {
      return `
      <div class="mi_grid">
      <div class="container producto">
          
              <div class="card mx-auto">
          <a href="${product.link_pagina}" target="_blank">
            <img src="${product.imagen}" class="imagen_bus" id="imgAPI">
          </a>
          <h4>${product.name}</h4>
          <div class="heart titulo-n"></div> 
          <p><b>${product.tienda}</b></p>
          <p style="color: red"><b>$${product.precio}.00</b></p>            
        </div>
        </div>
        </div>
        `;
    })
    .join('');
  productosMostrados.innerHTML = htmlString;
  Fav();
};
function Fav() {
  let icono = document.querySelectorAll('.heart');
  let estado = false;
  console.log(icono);
  icono.forEach(function (userItem) {
    userItem.addEventListener('click', function () {
      switch (estado) {
        case false:
          userItem.classList.add('heart_animate');
          estado = true;
          break;
        case true:
          userItem.classList.remove('heart_animate');
          estado = false;
          break;
      }
    });
  });
}
