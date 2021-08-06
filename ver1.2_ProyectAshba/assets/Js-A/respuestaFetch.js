const productosMostrados = document.getElementById('productosMostrados');
const formularioBusqueda = document.querySelector('form');
//Nos traemos la búsqueda del local storage
let busqueda = localStorage.getItem('busqueda') || null;

//Generamos un evento para iniciar llamar la función de búsqueda
formularioBusqueda.addEventListener('submit', (e) => {
  e.preventDefault();
  const search = document.getElementById('label');
  let busqueda = search.value;
  cargarProductos(busqueda);
});

//Esta función llama la API y nos permite desplegar los productos que coincidadn con búsqueda
const cargarProductos = async (busqueda) => {
  try {
    const res = await fetch(
      `http://localhost:8080/products/query/?name=${busqueda}`
    );
    console.log(`http://localhost:8080/products/query/?name=${busqueda}`);
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
      <div class="container producto">
          
              <div class="card mx-auto">
          <a href="${product.link_pagina}" target="_blank">
            <img src="${product.imagen}" class="imagen_bus" id="imgAPI">
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
