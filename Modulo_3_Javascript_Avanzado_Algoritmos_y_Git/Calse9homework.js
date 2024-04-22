
function creaFuncion() {
    let mensaje = "Hola";
    function muestraMensaje() {
        console.log(mensaje);
    }
    return muestraMensaje;
}

const miFuncion = creaFuncion();
miFuncion();

function crearContador() {
    let count = 0;
    return function () {
      // Completa esta función para incrementar 'count' en 1 y devolver su valor
    return count += 1;
    };
}

const contador = crearContador();
console.log(contador());
console.log(contador());

function multiplicador(numero) {
// Completa esta función para devolver una función que multiplique su argumento por 'numero'

return function(argumento){
    return numero * argumento;
}
}
const duplicar =multiplicador(2);
console.log(duplicar(5)); 
console.log(duplicar(10));

function sumarArreglo(numeros, callback) {
    // Completa esta función para sumar todos los números del arreglo

}