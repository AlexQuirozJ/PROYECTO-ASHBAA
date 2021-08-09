const itemTienda = document.getElementById('itemTienda');

//Nos traemos la búsqueda del local storage
let decision = localStorage.getItem('decision'); //Se trae esta si realizó la búsqueda por botones

//Esta función es para la eleccion por Boton, llama la API y nos permite desplegar los productos que coincidadn con la decision tomada
const cargarPorBoton = async (decision) => {
  try {
    const res = await fetch(
      `https://dry-thicket-77170.herokuapp.com/products/${decision}`
    );
    console.log(`https://dry-thicket-77170.herokuapp.com/products/${decision}`);
    let productosLista = await res.json();
    displayProductos(productosLista);
  } catch (err) {
    console.error(err);
  }
};

//si decision es true, entonces se activa la función de cargaPorBoton e inmediatamente se borra el elemento de local storage
if (decision) {
  cargarPorBoton(decision);
  localStorage.removeItem('decision');
}

//Esta función es la que nos permite anexar los productos al html en el formato que se necesita
const displayProductos = (products) => {
  const walmart = storeFirstItem(products, 'WALMART'); //Con estas constantes, se trae sólo el primer objeto que contenga el valor de la tienda correspondiente
  const amazon = storeFirstItem(products, 'AMAZON');
  const coppel = storeFirstItem(products, 'COPPEL');
  let tiendas = Array(); //Se declara un array, en el que se meteran los objetos tomados de arriba
  tiendas.push(walmart[0]);
  tiendas.push(amazon[0]);
  tiendas.push(coppel[0]);

  //Ahora, hay que filtrar los elementos, para que el código no se pare si encuentra un elemento "undefined"
  tiendas = tiendas.filter(function (element) {
    return element !== undefined;
  });

  //Se recorre el arreglo y por cada objeto se "pinta" en HTML la información
  const htmlString = tiendas
    .map((product) => {
      return `
      <div class="container producto">
          
              <div class="card mx-auto">
              <a href="${product.link_pagina}" target="_blank">
              <img src="${product.imagen}" class="imagen_bus" id="imgAPI">
              </a>
              <h4>${product.name}</h4>
              <div class="heart titulo-n"></div>
          <p>${product.marca}</p>
          <p><b>${product.tienda}</b></p>
            <p style="color: red"><b>$${product.precio}.00</b></p>            
        </div>
        </div>
        `;
    })
    .join('');
  itemTienda.innerHTML = htmlString;
};

//Esta es la función que filtra los elementos por tienda
const storeFirstItem = (products, storeName) => {
  const item = products.filter((product) => {
    if (product.tienda == storeName) {
      return product;
    }
  });

  return item;
};
