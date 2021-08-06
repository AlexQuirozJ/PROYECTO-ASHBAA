let icono = document.querySelectorAll('.heart');
let estado = false;
icono.forEach(function(userItem) {
    userItem.addEventListener('click', function () {
     
        switch (estado) {
            case false:
                userItem.classList.add('heart_animate');
                estado=true;
                break;
            case true:
                userItem.classList.remove('heart_animate');
                estado=false;
                break;
            
        }


    });
  });