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
    const inicio = parseInt(await input("Introduzca el inicio de su número aleatorio: "));
    const fin = parseInt(await input("Introduzca el final de su número aleatorio: "));
    const cantidad = parseInt(await input("Introduzca la cantidad de números aleatorios que desea: "));
    const array = [];
    let i = 0;
    while (i < cantidad) {
        array.push(Math.floor(Math.random() * (fin - inicio + 1)) + inicio); // Generar números aleatorios entre inicio y fin
        i++;
    }
    console.log(array);
    rli.close();
};
main();