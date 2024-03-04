//Proyecto  Final hacer el proyecto con 
//5 marcas de cigarrillo: Cigalia , Cigarros Brevas , Cigarros Chicamocha , Bravo , Puyana
// 5 paises: Japon , Singapur , Argentina , Colombia , Venezuela
//5 ciudades: Bogotá , Medellín , calí , Santa Marta , Bucaramanga

//Se le va a pedir al usuario que seleccione uno de los arrays

//Se crearon las variables :
const marcasDecigarrillos = ["Cigarros Cigalia","Cigarros Brevas","Cigarros Chicamocha","Cigarros Bravo","Cigarros Puyana"];//console.log(marcasDecigarrillos);
const paises =  ["Pais: Japón" , "Pais: Singapur" , "Pais: Argentina" , "Pais: Colombia" , "Pais: Venezuela"];//console.log( ciudades);
const ciudades = ["Ciudades: Bogotá" , "Ciudades:Medellín" , "Ciudades: Calí" , "Ciudades: Santa Marta" , "Ciudades: Bucaramanga"];//console.log( paises);
// Se creo esta funciona. Nota: En  esta parte del codigo (arrayAleatorio) Entiendo tu pregunta. En la declaración de la función obtenerElementosNuevo, el parámetro array es solo un nombre de variable local que se utiliza dentro de la función para referirse al array que se le pasa como argumento. Este nombre de variable local puede ser cualquier cosa que desees; no tiene que coincidir con los nombres de las constantes que utilices cuando llames a la función. cuando llamas a la función, puedes pasar cualquier array como argumento, independientemente de cómo se llame ese array en el código de la función. La función simplemente toma el array que se le pasa como argumento, calcula un índice aleatorio y devuelve un elemento aleatorio de ese array.
const obtenerElementosNuevo = (arrayAleatorio) => {
    const index = Math.floor(Math.random() * arrayAleatorio.length);
    return arrayAleatorio [index];
    };
//al llamar ala funcion agregando la variable dentro de () se llamaa a cualquier array. y luego con el return el calcula matematico se ejecuta y la funcion obtenerElementosNuevo da un resultado aleatoria.
    const ObjetoGeneralDeConst ={
        eleccion: Math.ceil(Math.random()*2)+1,
        elementosSimonDice: [],
        elementosUsuario: [],
        eleccioDelArray: []
    }
//const eleccion = await input("Agrega 1 , 2 , 3");
//Nota se hice este if y else if para tener una respuesta aleatorio al momento de que el usuario agrege 1,2,3 y se de una respuesta aleatoria
if (ObjetoGeneralDeConst.eleccion === 1) {
    ObjetoGeneralDeConst.eleccioDelArray = marcasDecigarrillos;
    } else if (ObjetoGeneralDeConst.eleccion === 2)     {
        ObjetoGeneralDeConst.eleccioDelArray = paises;
    } else if (ObjetoGeneralDeConst.eleccion === 3) {
        ObjetoGeneralDeConst.eleccioDelArray = ciudades;
    } else {
        console.log("Estas fuera del rango")
    }


//const marcaAleatoria = obtenerElementosNuevo(marcasDecigarrillos);// se creo esta constante para llamar a la funcion y a su vez llamar a un array seleccionandolo(y funciona con cualquier array)
//console.log(`Marca de cigarrillos Aleatoria: ${marcaAleatoria}`); ///Aqui se selcciono un array y se llamo de manera aleatoria

//const paisesAleatoria = obtenerElementosNuevo(paises);
//console.log(`Paises Aleatoria: ${paisesAleatoria}`);

//const ciudadesAleatoria = obtenerElementosNuevo(ciudades);
//console.log(`Ciudades Aleatoria: ${ciudadesAleatoria}`);


//Se agrega un elemento a simon dice
ObjetoGeneralDeConst.elementosSimonDice.push(obtenerElementosNuevo(ObjetoGeneralDeConst.eleccioDelArray));
console.log(`Elemento simon dice memorizalo ${ObjetoGeneralDeConst.elementosSimonDice}`);

//Nota se hace un objeto para que contenga todas los const
//Nota se usan dos puntos para definirlas y se separan con comas
