const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numerosPares = numeros.filter((numero) => numero % 2 === 0);

const numerosMayor5 = numeros.filter((numero) => numero > 5);

console.log(numerosPares);
console.log(numerosMayor5);

const productos = [
  {
    nombre: "Camisa",
    precio: 2500,
    cantidad: 2,
    categoria: "Ropa",
    color: "Azul",
    talla: "M",
  },
  {
    nombre: "Pantalón",
    precio: 4000,
    cantidad: 1,
    categoria: "Ropa",
    color: "Negro",
    talla: "32",
  },
];

function filtrarLista(item) {
  return productos.filter((producto) => producto.nombre !== item);
}

console.log(filtrarLista("Camisa"));
