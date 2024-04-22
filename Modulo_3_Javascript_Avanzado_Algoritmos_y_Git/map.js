//Map
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersx10 = numbers.map((value) => value * 10);

console.log(numbersx10);

//Objetos
const estudiantes = [
  {
    nombre: "Ana",
    edad: 20,
    promedio: 85,
    genero: "Femenino",
    carrera: "Ingeniería Civil",
    ciudad: "Bogotá",
  },
  {
    nombre: "Juan",
    edad: 22,
    promedio: 78,
    genero: "Masculino",
    carrera: "Medicina",
    ciudad: "Medellín",
  },
  {
    nombre: "María",
    edad: 21,
    promedio: 90,
    genero: "Femenino",
    carrera: "Administración de Empresas",
    ciudad: "Cali",
  },
  {
    nombre: "Pedro",
    edad: 23,
    promedio: 82,
    genero: "Masculino",
    carrera: "Derecho",
    ciudad: "Barranquilla",
  },
];
//agrega campo semestre
const semestre =  estudiantes.map((value)=> {
value.semestre = 3;
return value;
})
console.log(semestre)

// spread operator

const estudiantesCampoNuevo = estudiantes.map((value) => {
    return{
        ...value,
        semestre: 8,
        ciudad: "Medallo",
        companeros: 20,
    }
})

// Elimina el campo ciudad

const estudiantesSinCiudad =  estudiantes.map((value)=>{
    delete value.ciudad;
    return value;
})
console.log(estudiantesSinCiudad)
console.log(estudiantesCampoNuevo)

const numero = [1,2,3]
const numeroNuevos =[...numero, 4 , 5]
console.log(numeroNuevos)