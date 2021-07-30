var total=0;

function sumar(valor) {
total += valor;
document.formulario.total.value=total;
}

function restar(valor) {
total-=valor;
document.formulario.total.value=total;
}