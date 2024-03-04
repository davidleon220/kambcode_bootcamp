const rli = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(prompt) {
    return new Promise((resolve, reject) => {
        rli.question(prompt, (userInput) => {
            resolve(userInput);
        }, () => {
            reject();
        });
    });
}

const main = async () => {
    const inicio = await input("Introduzca el inicio de su número aleatorio: ");
    const fin = await input("Introduzca el final de su número aleatorio: ");
    const cantidad = await input("Introduzca la cantidad de números aleatorios que desea: ");
    const numerosAleatorios = generarNumerosAleatorios(parseInt(inicio), parseInt(fin), parseInt(cantidad));
    console.log('Resultado:', numerosAleatorios.join(', '));
    rli.close();
};

const generarNumerosAleatorios = (inicio, fin, cantidad) => {
    const numerosAleatorios = [];
    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.floor(Math.random() * (fin - inicio + 1)) + inicio;
        numerosAleatorios.push(numeroAleatorio);
    }

    return numerosAleatorios;
};
main();
