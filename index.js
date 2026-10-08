//RESUELVE LOS EJERCICIOS AQUI
// 1.- Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función elevados que sea el resultado de elevar cada número a si mismo
let numbers = [4, 5, 6, 7, 8, 9, 10];
exponenteNumber = (n) => n ** n; //Creamos la funcion
let resultado = numbers.map(exponenteNumber); //Aplicamos map en nuevo array que creo "resultado"
console.log(resultado);
//2.- Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.
let listaComidas = ["Pizza", "Ramen", "Paella", "Entrecot"];
//const resultado1 = comidas.map((item) => `Comer ${item}`)
[
  "Como soy de Italia, amo comer Pizza",
  "Como soy de Japón, amo comer Ramen",
  "Como soy de Valencia, amo comer Paella",
  "Aunque no como carne, el Entrecot es sabroso",
];

let comidas = ["Pizza", "Ramen", "Paella", "Entrecot"];

let result = comidas.map((comida, i) => {
  if (i === 0) {
    return `Como soy de Italia, amo comer ${comida}`;
  }
  if (i === 1) {
    return `Como soy de Japón, amo comer ${comida}`;
  }
  if (i === 2) {
    return `Como soy de Valencia, amo comer ${comida}`;
  }
  if (i === 3) {
    return `Aunque no como carne, el ${comida} es sabroso`;
  }
});

console.log(result);

//3.- Dado el array staff, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

const result1 =staff.map((persona)=>{
    return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]} `
})
console.log(result1)
// Resultado 
/*
  [
    'Pepe es The Boss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ] */

//FILTER

 //4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares
 const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let imparNumber = numbers2.filter(number =>{
    return number %2 !==0;//numero /2 no par
 })
 console.log(imparNumber);
 //5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo
 ['Que rico Tempeh me voy a comer!',
'Que rica Tofu burguer me voy a comer!']
const foodList2 =[
{
  name: 'Tempeh',
  isVeggie: true
},
{
  name: 'Cheesbacon burguer',
  isVeggie: false
},
{
  name: 'Tofu burguer',
  isVeggie: true
},
{
  name: 'Entrecot',
  isVeggie: false
}];
let result5 = foodList2.filter((item)=>{
    return item.isVeggie===true;
}) 
.map((item)=>{
 return `Que rico ${item.name} me voy a comer!`
});
console.log(result5);
//6.- Dado el array inventory, devolver un array con los nombres de los elementos que valgan más de 300 euros.

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];
let cosasCaras = inventory.filter((cosas)=>{
    return cosas.price > 300;
})
console.log(cosasCaras);
//REDUCE
//7.- Dado el siguiente array numeros [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array
let numeros =[39, 2, 4, 25, 62];
let result6= numeros.reduce((acumulador,actual,i)=>
    acumulador * actual)
console.log(result6)
//8.- Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
  'Me',
  'llamo',
  'Erik',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
let fraseFinal= sentenceElements.reduce((acumulador,actual)=>{
    return acumulador + " "+ actual;
})
;console.log(fraseFinal);
// 9.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.
const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];
// Resultado --> 60
const montoTotal =books.reduce((acumulador,actual)=>{
  if (actual.category==="code"){
    acumulador += actual.price;
  }return acumulador;
},0); //poner el indice que me he vuelto loco
console.log(montoTotal);



