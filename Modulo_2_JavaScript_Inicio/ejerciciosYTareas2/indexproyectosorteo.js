const readLine = require('readline');
const rl = readLine.createInterface(

    process.stdin,
    process.stdout
)

rl.setPrompt('Cantidad de numero al azar');
rl.prompt();
rl.on('line' , (numero) => {
    console.log("Mi numero al azar es" , Math.round((Math.random() * numero)))
})