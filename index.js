// Función para generar un número aleatorio entre un rango dado
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Generamos dos números aleatorios en el rango de 1 a 100
const numero1 = getRandomNumber(1, 20);
const numero2 = getRandomNumber(1, 20);

// Mostramos los números generados
console.log("Número 1:", numero1);
console.log("Número 2:", numero2);