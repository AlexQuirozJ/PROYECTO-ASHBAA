

//funcion para efecto de corazon
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

//funcion para poner fotos 
  let camara = document.querySelector('#camara')
  camara.addEventListener('click',()=>{
      let foto = document.querySelector('#file');
      foto.click();
        foto.onchange=function(e){
            let reader=new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload=function(){
                let preview=document.getElementById("fotito");
                preview.src=reader.result;
            }
        }
  });