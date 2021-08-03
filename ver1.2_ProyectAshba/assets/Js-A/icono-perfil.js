let icono = document.querySelectorAll('.heart');

icono.forEach(function(userItem) {
    userItem.addEventListener('click', function () {
        userItem.classList.add('heart_animate');
    });
  });