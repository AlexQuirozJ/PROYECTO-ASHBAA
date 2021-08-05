let icono = document.querySelectorAll('.heart');

icono.forEach(function (userItem) {
  userItem.addEventListener('click', function () {
    userItem.classList.add('heart_animate');
  });
});
let camara = document.querySelector('#camara');
camara.addEventListener('click', () => {
  let foto = document.querySelector('#file');
  foto.click();
  foto.onchange = function (e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
      let preview = document.getElementById('fotito');
      preview.src = reader.result;
    };
  };
});
