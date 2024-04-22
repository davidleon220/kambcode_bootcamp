// Reduce

const sumaNumeros = numeros.reduce((acumulador, numero) => acumulador + numero);

console.log(sumaNumeros);

const caracteres = ["h", "o", "l", "a"];

const mensaje = caracteres.reduce(
  (acumulador, valorActual) => acumulador + valorActual
);

const caracteres2 = "h" + "o" + "l" + "a";

console.log("primer intento: " + caracteres2);
console.log("el mensaje es: " + mensaje);

const numerosPares3 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

let acumulador = 0;

for (let index = 0; index < numerosPares3.length; index++) {
  acumulador = numerosPares3[index] + acumulador;
}

console.log("acumulador: ", acumulador);

const resultado2 = numerosPares3.reduce(
  (acumulador, numeroPar) => numeroPar + acumulador
);

console.log("acumulador 2: ", resultado2);
