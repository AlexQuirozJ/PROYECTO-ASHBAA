const productosMostrados = document.getElementById('productosMostrados');
const formularioBusqueda = document.querySelector('form');

formularioBusqueda.addEventListener('submit', (e) => {
  e.preventDefault();
  productosMostrados.innerHTML = '';
  const search = document.getElementById('search');
  let busqueda = search.value;
  cargarProductos(busqueda);
});

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

const displayProductos = (products) => {
  const htmlString = products
    .map((product) => {
      return `
      <div class="container producto">
          
              <div class="card mx-auto">
            <a href="${product.link_pagina}">
            <img src="${product.imagen}" id="imgAPI">
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

//cargarProductos();
