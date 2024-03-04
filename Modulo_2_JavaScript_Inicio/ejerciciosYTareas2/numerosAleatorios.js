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

function dado(shot1 , shot2){
    shot1 = Math.ceil(shot1);
    shot2 = Math.ceil(shot2);
     return Math.floor(Math.random() * (1+ shot2 - shot1) + shot1);
}

for ( i = 0 ; i < 6 ; i++ ) {
    console.log("El numero de este dado es: " + dado(1 , 6) );
}