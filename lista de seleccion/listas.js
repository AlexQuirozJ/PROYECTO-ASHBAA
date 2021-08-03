// Variables
const baseDeDatos = [
    {
        id: 1,
        nombre: 'JBL JBLXTREME2BLKAM',
        descripcion: 'JBL JBLXTREME2BLKAM Bocina Inalámbrica, color Negro',
        precio: 1999,
        marca: 'JBL',
        tienda: 'AMAZON',
        imagen: 'https://m.media-amazon.com/images/I/81dJA2VmHgL._AC_SL1500_.jpg'
    },
    {
        id: 2,
        nombre: 'JBL JBLXTREME2BLKAM',
        descripcion: 'JBL Jbl xtreme 2 portable waterproof wireless bluetooth speaker red, 5.4 Pound',
        precio: 4499,
        marca: 'JBL',
        tienda: 'AMAZON',
        imagen: 'https://m.media-amazon.com/images/I/71H05DbBxWL._AC_SL1000_.jpg'
    },
    {
        id: 3,
        nombre: 'JBL CHARGE 4BLKAM Bocina',
        descripcion: 'JBL JBLCHARGE4BLKAM Bocina, Negro',
        precio: 2695,
        marca: 'JBL',
        tienda: 'AMAZON',
        imagen: 'https://m.media-amazon.com/images/I/71Cg0EbAWQL._AC_SL1500_.jpg'
    },
    {
        id: 4,
        nombre: 'Kaiser Bocina KSR Rojo',
        descripcion: 'Kaiser Bocina KSR-Link con Bluetooth Color Rojo',
        precio: 399,
        marca: 'KAISER',
        tienda: 'AMAZON',
        imagen: 'https://m.media-amazon.com/images/I/51ksK2u8SML._AC_SL1000_.jpg'
    },
    {
        id: 5,
        nombre: 'Kaiser Bocina KSR Negro',
        descripcion: 'Kaiser Bocina KSR-Link Recargable con Bluetooth Color Negro',
        precio: 4499,
        marca: 'KAISER',
        tienda: 'AMAZON',
        imagen: 'https://ss630.liverpool.com.mx/xl/1092889099.jpg'
    }

];

let carrito = [];
let total = 0;
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. tarjetas
 */
function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Descripcion
        const miNododescripcion = document.createElement('p2');
        miNododescripcion.classList.add('card-text');
        miNododescripcion.textContent = info.descripcion;
        //Marca
        const miNodomarca = document.createElement('h6');
        miNodomarca.classList.add('card-text');
        miNodomarca.textContent = info.marca;
        //Tienda
        const miNodotienda = document.createElement('p');
        miNodotienda.classList.add('card-text');
        miNodotienda.textContent = info.tienda;
        // Imagen
        const miNodoImagen = document.createElement('img', 'max-height: 100%')
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p1');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = info.precio;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = 'Guardar';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Boton2
        const miNodoBoton2 = document.createElement('button');
        miNodoBoton2.classList.add('btn', 'btn-outline-warning');
        miNodoBoton2.textContent = 'Comprar';
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNododescripcion);
        miNodoCardBody.appendChild(miNodomarca);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodotienda);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodoCardBody.appendChild(miNodoBoton2);
        
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

/**
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Calculo el total
    calcularTotal();
    // Actualizamos el carrito 
    renderizarCarrito();

}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-center', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
    // Calculamos de nuevo el precio
    calcularTotal();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Limpiamos precio anterior
    total = 0;
    // Recorremos el array del carrito
    carrito.forEach((item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        total = total + miItem[0].precio;
    });
    // Renderizamos el precio en el HTML
    DOMtotal.textContent = total.toFixed(2);
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
    calcularTotal();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();
