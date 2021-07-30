const productosMostrados = document.getElementById('productosMostrados');

const cargarProductos = async () => {
  try {
    const res = await fetch('http://localhost:8080/products/query?Categoria=IMPRESORAS');
    let productosLista = await res.json();
    displayProductos(productosLista);
  } catch (err) {
    console.error(err);
  }
};


const displayProductos = (productos) => {
  const htmlString = productos
    .map((product) => {
      return `
      <div class="container producto">
          
              <div class="card mx-auto">
            <a href="${product.link_pagina}">
           
            <img src="${product.imagen}" id="imgAPI" s>
          </a>
            <p style="font-family: Arial, Helvetica, sans-serif;">${product.name}</p>
            <h4 style="font-family: Arial, Helvetica, sans-serif;"><strong>${product.marca}</strong></h4>
            <p style="font-family: Arial, Helvetica, sans-serif;">${product.tienda}</p>
            <p style="color: red"><b>$${product.precio}.00</b></p>            
        </div>
        </div>
        `;
    })
    .join('');
  productosMostrados.innerHTML = htmlString;
};

cargarProductos();
