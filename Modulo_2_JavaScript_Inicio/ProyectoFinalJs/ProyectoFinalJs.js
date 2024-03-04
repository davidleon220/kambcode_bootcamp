const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let accumulated = 0;

const choiceOfOperation = (number) => {
    rl.question('Ingrese una operación matematica: Suma (S)(+), Resta (R)(-), Multiplicacion (M)(*), Division (D)(/) ' , (answer) => {
        console.log();
        answer = answer.toLowerCase();
        if (answer === 's'|| answer ==='suma' || answer === '+' ) {
            accumulated = accumulated + number;
            console.log(`Acumulado actual en Suma es de: ${accumulated}`);
            console.log();
            start();
        } else if (answer === 'r' ||answer ==='resta' ||answer === '-' ) {
            accumulated = accumulated - number;
            console.log(`Acumulado actual en Resta es de: ${accumulated}`);
            console.log();
            start();
        } else if (answer === 'm' || answer ==='multiplicacion' || answer === '*' ) {
            accumulated = accumulated * number;
            console.log(`Acumulado actual en Multiplicacion es de: ${accumulated}`);
            console.log();
            start();
        } else if (answer === 'd' || answer ==='division' || answer === '/' ) {
            accumulated = accumulated / number;
            console.log(`Acumulado actual en Division es de: ${accumulated}`);
            console.log();
            start();
        } else {
            console.log('Por favor, introduce una de las opciones que se indica en el enunciado');
            console.log();
            choiceOfOperation();
        }
    });
};
//En la siguiente funcion se va a crear una funcion para agregar los numeros
const start = () => {
    rl.question('Ingrese un nuevo número para la operación: ' , (answer) => {
        console.log();
        const number = parseFloat(answer);
        if (!isNaN(number)) {
            choiceOfOperation(number);
        } else {
            console.log('Por favor, ingrese un número válido');
            choiceOfOperation (accumulated);
        }
});
}
console.log();
console.log('Este programa suma, multipla, resta o divide infinitamente los números ingresados.');
console.log();
choiceOfOperation (0);
