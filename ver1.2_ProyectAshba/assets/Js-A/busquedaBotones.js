const btnComputadora1 = document.getElementById('btnC1');
const btnComputadora2 = document.getElementById('btnC2');
const btnComputadora3 = document.getElementById('btnC3');
const btnCelular1 = document.getElementById('btn1');
const btnCelular2 = document.getElementById('btn2');
const btnCelular3 = document.getElementById('btn3');
const btnTablet1 = document.getElementById('btnT1');
const btnTablet2 = document.getElementById('btnT2');
const btnTablet3 = document.getElementById('btnT3');
const btnPantalla1 = document.getElementById('btnP1');
const btnPantalla2 = document.getElementById('btnP2');
const btnPantalla3 = document.getElementById('btnP3');
const btnImpresora1 = document.getElementById('btnI1');
const btnImpresora2 = document.getElementById('btnI2');
const btnImpresora3 = document.getElementById('btnI3');
const btnAuricular1 = document.getElementById('btnA1');
const btnAuricular2 = document.getElementById('btnA2');
const btnAuricular3 = document.getElementById('btnA3');
let decision = ''; //Decisión se define como string vacío

if (
  btnComputadora1 != undefined ||
  btnComputadora2 != undefined ||
  btnComputadora3 != undefined
) {
  btnComputadora1.addEventListener('click', (e) => {
    e.preventDefault(); //Se previene la acción por defecto
    //decisión se sustituye por el método con el que llamaremos los productos
    decision = 'computadoras1?Categoria=COMPUTADORAS&precio=4000&precio2=10000';
    //Se guarda la decisión en Local Storage
    localStorage.setItem('decision', decision);
    //Y se redirige a la página
    redirect();
  });

  btnComputadora2.addEventListener('click', (e) => {
    e.preventDefault();
    decision =
      'computadoras2?Categoria=COMPUTADORAS&precio=10001&precio2=20000';
    localStorage.setItem('decision', decision);
    redirect();
  });

  btnComputadora3.addEventListener('click', (e) => {
    e.preventDefault();
    decision =
      'computadoras3?Categoria=COMPUTADORAS&precio=20001&precio2=50000';
    localStorage.setItem('decision', decision);
    redirect();
  });
} else if (
  btnCelular1 != undefined ||
  btnCelular2 != undefined ||
  btnCelular3 != undefined
) {
  btnCelular1.addEventListener('click', (e) => {
    e.preventDefault();
    decision = 'celulares1?Categoria=CELULARES&precio=2000&precio2=6000';
    localStorage.setItem('decision', decision);
    redirect();
  });

  btnCelular2.addEventListener('click', (e) => {
    e.preventDefault();
    decision = 'celulares2?Categoria=CELULARES&precio=6001&precio2=12000';
    localStorage.setItem('decision', decision);
    redirect();
  });

  btnCelular3.addEventListener('click', (e) => {
    e.preventDefault();
    decision = 'celulares3?Categoria=CELULARES&precio=12000&precio2=50000';
    localStorage.setItem('decision', decision);
    redirect();
  });
} else if (
  btnTablet1 != undefined ||
  btnTablet2 != undefined ||
  btnTablet3 != undefined
) {
  btnTablet1.addEventListener('click', (e) => {
    e.preventDefault();
    decision = 'tablets1?Categoria=TABLETAS&precio=20001&precio2=6000';
    localStorage.setItem('decision', decision);
    redirect();
  });

  btnTablet2.addEventListener('click', (e) => {
    e.preventDefault();
    decision = 'tablets2?Categoria=TABLETAS&precio=20001&precio2=6000';
    localStorage.setItem('decision', decision);
    redirect();
  });

  btnTablet3.addEventListener('click', (e) => {
    e.preventDefault();
    decision = 'tablets3?Categoria=TABLETAS&precio=20001&precio2=6000';
    localStorage.setItem('decision', decision);
    redirect();
  });
} else if (
  btnPantalla1 != undefined ||
  btnPantalla2 != undefined ||
  btnPantalla3 != undefined
) {
  btnPantalla1.addEventListener('click', (e) => {
    e.preventDefault();
    decision = 'pantallas1?Categoria=PANTALLAS&precio=20001&precio2=6000';
    localStorage.setItem('decision', decision);
    redirect();
  });

  btnPantalla2.addEventListener('click', (e) => {
    e.preventDefault();
    decision = 'pantallas2?Categoria=PANTALLAS&precio=20001&precio2=6000';
    localStorage.setItem('decision', decision);
    redirect();
  });

  btnPantalla3.addEventListener('click', (e) => {
    e.preventDefault();
    decision = 'pantallas3?Categoria=PANTALLAS&precio=20001&precio2=6000';
    localStorage.setItem('decision', decision);
    redirect();
  });
} else if (
  btnImpresora1 != undefined ||
  btnImpresora2 != undefined ||
  btnImpresora3 != undefined
) {
  btnImpresora1.addEventListener('click', (e) => {
    e.preventDefault();
    decision = 'impresoras1?Categoria=IMPRESORAS&precio=20001&precio2=6000';
    localStorage.setItem('decision', decision);
    redirect();
  });

  btnImpresora2.addEventListener('click', (e) => {
    e.preventDefault();
    decision = 'impresoras2?Categoria=IMPRESORAS&precio=20001&precio2=6000';
    localStorage.setItem('decision', decision);
    redirect();
  });

  btnImpresora3.addEventListener('click', (e) => {
    e.preventDefault();
    decision = 'impresoras3?Categoria=IMPRESORAS&precio=20001&precio2=6000';
    localStorage.setItem('decision', decision);
    redirect();
  });
} else if (
  btnAuricular1 != undefined ||
  btnAuricular2 != undefined ||
  btnAuricular3 != undefined
) {
  btnAuricular1.addEventListener('click', (e) => {
    e.preventDefault();
    decision = 'auriculares1?Categoria=AURICULARES&precio=20001&precio2=6000';
    localStorage.setItem('decision', decision);
    redirect();
  });

  btnAuricular2.addEventListener('click', (e) => {
    e.preventDefault();
    decision = 'auriculares2?Categoria=AURICULARES&precio=20001&precio2=6000';
    localStorage.setItem('decision', decision);
    redirect();
  });

  btnAuricular3.addEventListener('click', (e) => {
    e.preventDefault();
    decision = 'auriculares3?Categoria=AURICULARES&precio=20001&precio2=6000';
    localStorage.setItem('decision', decision);
    redirect();
  });
}

//Esta será la función que redirigirá a la página que desplegará los productos
function redirect() {
  //Y lo redirigimos a la página donde se desplegará la información
  url = window.location;
  path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1);
  location.href = path + 'respuestaBotones.html';
}
