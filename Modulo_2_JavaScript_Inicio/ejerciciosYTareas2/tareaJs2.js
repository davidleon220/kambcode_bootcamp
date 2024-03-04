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
    const result = [];
    const range = () => {
        (parseFloat(start) - parseFloat(end) + 1)
        }

        const approach = () => {
            let number = Math.ceil(10 * Math.random(range)  + parseFloat(start)); //si le quito parseFloat(start) me da el mismo resultado en la consola
            return number;
        }

        const randomSecondQuantity = () => {
            for ( let i = 0 ; i < amount ; i++ ) {
                result.push(approach());
            }
            return result;
        }
    console.log(randomSecondQuantity());
    rli.close();
};
main();