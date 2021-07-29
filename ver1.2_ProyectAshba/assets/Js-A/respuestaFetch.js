const productosMostrados = document.getElementById('productosMostrados');

const cargarProductos = async () => {
  try {
    const res = await fetch('http://hp-api.herokuapp.com/api/characters');
    let productosLista = await res.json();
    displayProductos(productosLista);
  } catch (err) {
    console.error(err);
  }
};

const displayProductos = (productos) => {
  const htmlString = productos
    .map((producto) => {
      return `
      <div class="container producto">
          
              <div class="card mx-auto">
            <a href="https://www.walmart.com.mx/celulares/smartphones/celulares-desbloqueados/smartphone-samsung-galaxy-a31-64-gb-negro-desbloqueado_00880609040245" title="Comprar en Walmart" target="_blank">
            <img src="${producto.image}" id="img">
          </a>
            <p>${producto.name}</p>
            <p>${producto.house}</p>
            <p style="color: red"><b>$${producto.yearOfBirth}</b></p>            
        </div>
        </div>
        `;
    })
    .join('');
  productosMostrados.innerHTML = htmlString;
};

cargarProductos();
