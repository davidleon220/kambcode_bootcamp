const rli = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function input(prompt) {
  return new Promise((callbackFn, errorFn) => {
      rli.question(prompt, (uinput)=> {
          callbackFn(uinput);
      }, ()=> {
          errorFn();
      });
  });
}

const main = async () => {
  const operation = await input("Hola, ¿Qué operación quieres hacer? suma, resta, multiplicacion, division: ");
  console.log(operation);
  const first = await input("Ingrese el primer número: ");
  console.log(first);
  const second = await input("Ingrese el segundo número: ");
  console.log(second);
        // Realizar operaciones según la entrada del usuario
        if (operation === "suma"){
          let addition = parseFloat(first) + parseFloat(second);
          console.log("La Suma de los dos numero es de: " + addition);
        } else if (operation === "resta"){
          let subtraction = parseFloat(first) - parseFloat(second);
          console.log("La resta de los dos numero es de: " + subtraction);
        } else if (operation === "multiplicacion"){
          let multiplication = parseFloat(first) * parseFloat(second);
          console.log("La multiplicacion de los dos numero es de: " + multiplication);
        } else if (operation === "division"){
          let division = parseFloat(first) / parseFloat(second);
          console.log("La division de los dos numero es de: " + division);
        } else {
          console.log("Por favor ingrese solo numeros")
        }
  rli.close();
};
main();

