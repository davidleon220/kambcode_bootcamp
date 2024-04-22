const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sumaNumero = numeros.reduce(
  (acumulador, numero) => acumulador + numero,
  0//el 0 aplica solo para operaciones con numero
);
console.log(sumaNumero);
