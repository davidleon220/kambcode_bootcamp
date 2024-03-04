const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generarNumerosAleatorios(inicio, fin, cantidad) {
  const numerosAleatorios = [];

  for (let i = 0; i < cantidad; i++) {
    const numeroAleatorio = Math.floor(Math.random() * (fin - inicio + 1)) + inicio;
    numerosAleatorios.push(numeroAleatorio);
  }

  return numerosAleatorios;
}

rl.question('Introduzca el inicio de su número aleatorio: ', (inicio) => {
  rl.question('Introduzca el final de su número aleatorio: ', (fin) => {
    rl.question('Introduzca la cantidad de números aleatorios que desea: ', (cantidad) => {
      const numerosAleatorios = generarNumerosAleatorios(parseInt(inicio), parseInt(fin), parseInt(cantidad));

      console.log('Resultado:', numerosAleatorios.join(', '));

      rl.close();
    });
  });
});