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
    const start = await input("Introduzca el inicio de su número aleatorio: ");
    const end = await input("Introduzca el final de su número aleatorio: ");
    const amount = await input("Introduzca la cantidad de números aleatorios que desea: ");
    const result=[];
    for ( let i = 0 ; i < amount ; i++ ) {
        result.push(Math.floor((10 * Math.random( parseFloat(start) - parseFloat(end))+ start)), );
    }
    console.log(result);
    rli.close();
};
main();