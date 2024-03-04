
const myFamily = {
    papa:  {name: 'Roberto', age: 58, hobbie: 'golf', lastName: 'Rodriguez'},
    mama:  {name: 'Martha', age: 55, hobbie: 'shopping', lastName: 'Martinez'},
    abuelo:  {name: 'Ezequiel', age: 80, hobbie: 'ajedrez', lastName: 'Rodriguez'},
    hijo:  {name: 'Mateo', age: 67, hobbie: 'futbol', lastName: 'Rodriguez'},
};

///Cree un algoritmo que reciba el objeto familia, y devuelva el nombre y apellido del familiar 
// mas joven, familiar mas viejo, y que salude al miembro de la familia que le gusta el shopping 
// con un "Hola, <Nombre><Apellido nos fascina que te guste el shopping"

const start = () => {
    let familyMinimumAge = '';
    let minimumAge = 300;
    let familyAgeMaximum = '';
    let maximumAge = 0;
    let shoppingLover= '';

    for(familiar in myFamily) {
        console.log(familiar, "===>", myFamily[familiar].age);
        if(minimumAge > myFamily[familiar].age) {
            minimumAge = myFamily[familiar].age;
            familyMinimumAge = familiar;
        }
        if (myFamily[familiar].hobbie === "shopping"){
            shoppingLover = familiar;
        }
        if(maximumAge < myFamily[familiar].age) {
            maximumAge = myFamily[familiar].age;
            familyAgeMaximum = familiar;
        }
    }
console.log("El familiar al que le gusta mas el shopping es " + shoppingLover);
console.log("El familiar con edad minima es: " + familyMinimumAge);
console.log("El familiar con edad máxima es: " + familyAgeMaximum);
};
console.log('Este programa calcula mi familia');
start();

