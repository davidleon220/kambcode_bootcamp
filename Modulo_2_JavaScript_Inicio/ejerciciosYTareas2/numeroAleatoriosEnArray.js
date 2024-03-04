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
   
    const numbre1 = await input("Introduzca el inicio de su numero aleatorio: ");
    const numbre2 = await input("Introduzca el final de su numero aleatorio: ");
    const numbre5 = await input("Introduza la cantidad de numeros aleatorios que desea: ");
    const miArray = [];
    for (let i = 0; i < numbre5; i++) {
        const randomNumber = Math.floor((numbre2 - numbre1 + 1) * Math.random() + numbre1);
        miArray.push(randomNumber);
        console.log(randomNumber , "Número aleatorio");
    }
    console.log(miArray);

    rli.close();
};
main();