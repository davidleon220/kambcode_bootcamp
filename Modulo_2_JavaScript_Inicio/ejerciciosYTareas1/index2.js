const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cuál es tu nombre? ', (name) => {
  console.log(`Hola, ${name}!`);

  rl.question('¿Qué operación quieres hacer? suma, resta, multiplicacion, division ', (operation) => {
    rl.question('Ingrese el primer número: ', (num1) => {
      rl.question('Ingrese el segundo número: ', (num2) => {
        // Realizar operaciones según la entrada del usuario
        if (operation.toLowerCase() === 'suma') {
          console.log(`Resultado: ${parseFloat(num1) + parseFloat(num2)}`);
        } else if (operation.toLowerCase() === 'resta') {
          console.log(`Resultado: ${parseFloat(num1) - parseFloat(num2)}`);
        } else if (operation.toLowerCase() === 'multiplicacion') {
          console.log(`Resultado: ${parseFloat(num1) * parseFloat(num2)}`);
        } else if (operation.toLowerCase() === 'division') {
          if (parseFloat(num2) !== 0) {
            console.log(`Resultado: ${parseFloat(num1) / parseFloat(num2)}`);
          } else {
            console.log('Error: No se puede dividir por cero.');
          }
        } else {
          console.log('Operación no válida');
        }

        rl.close();
      });
    });
  });
});
