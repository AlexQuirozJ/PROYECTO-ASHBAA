const f_alerta= document.getElementById("alerta");
const V_busqueda= document.getElementById('btn_busqueda');
let busqueda = document.getElementById('btn_busqueda').addEventListener('click',() => {
    let input_busqueda= document.getElementById('label').value;

    if(input_busqueda===""){
        MostrarMensaje("Por favor ingresa texto en el campo de busqueda");
    }else{
           V_busqueda.href= "resBusquedaS.html"
    }
});
function MostrarMensaje(msj){
    const alerta= document.createElement('P');
    alerta.textContent=(msj);    
           alerta.classList.add('error')
           f_alerta.appendChild(alerta);
       setTimeout(() => {
        alerta.remove();
    }, 6000);
          
}