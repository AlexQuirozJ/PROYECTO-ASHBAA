let boton= document.getElementById('btn_form').addEventListener('click',()=>{
    
    const nombre= document.querySelector('#txt_nombre').value;
    const email= document.querySelector('#txt_correo').value;
    const telefono= document.querySelector('#txt_telefono').value;
    const mensaje= document.querySelector('#txt_mensaje').value;
    console.log(nombre, email, telefono, mensaje)
    //Elemnto de submit
    const etiqueta= document.getElementById('formulario');
    //Validacion de formularios
    if(nombre==="" || email==="" || mensaje==="" || telefono===""){
      MostrarMensaje('Todos los campos son obligatorios, revise bien su información','error');
          return;
    }else{
       //Enviar formulario
    console.log('Enviando formulario...');
    MostrarMensaje('La información se ha enviado de manera éxitosa'); 
    }
    
    
    function MostrarMensaje(msj,error=null){
        const alerta= document.createElement('P');
        alerta.textContent=(msj);
           if(error){
               alerta.classList.add('error')
           }else{
               alerta.classList.add('correct')
           }
           etiqueta.appendChild(alerta);
           setTimeout(() => {
            alerta.remove();
        }, 4000);
    }
});
