/*
Challenge:
  A Set of objects
Descripción:
  Considerando el siguiente Set de objetos propagados en un nuevo array.
  Qué se loguea por pantalla?
Posibles opciones:
  - [{ a: 1 }, { a: 1 }]
  - [{ a: 1 }]
--------------------
Conceptos a entender:
  - Tipos de datos primitivos (7)
  - Set + Ejemplo de abecedario
    - Qué es un Set?
    - Como agregar valores al mismo? (2 maneras)
    - Como iterar sobre un Set?
    - Como conocer la cantidad de elementos?
  - Operador spread (propagador) + Ejemplo abecedario
    - Cómo se utiliza?
    - Para qué nos sirve?
    - Qué pasa cuando hacemos un spread de un Set en un array?
*/

/*
Tipos de datos primitivos (7):
  - number
  - string
  - boolean
  - null
  - undefined
  - BigInt
  - Symbol
*/

/*
  - Set + Ejemplo de abecedario
    - Qué es un Set?
      Es una colección o set de valores únicos,
      no se repiten los valores si los mismos son tipos de datos primitivos,
      o bien si son las mismas referencias a objetos.
      No tiene keys u propiedades.
      Elementos estan ordenados por orden de inserción.

    - Como agregar valores al mismo? (2 maneras)
      Podemos inicializar valores a través del parámetro del constructor
      utilizando un array en el mismo.
      O bien podemos utilizar el método .add() de los Set.

    - Como iterar sobre un Set?
      Podemos usar for, o bien podemos utilizar el método forEach().
    - Como conocer la cantidad de elementos?
      Para conocer la cantidad de un Set utilizamos la propiedad "size".

*/

// Ejemplo:
const abcCharacters = new Set(['a', 'b', 'c']);
abcCharacters.add('d');
console.log(abcCharacters);

// Como iterar sobre un set ?

let g = 12;

for (const character of abcCharacters) {
  // console.log('character:', character);
}

// abcCharacters.forEach(console.log);

// Para conocer la cantidad de elementos se utiliza el metodo size
// console.log('abcCharacters:', abcCharacters.size);

const animal = { tipo: 'perro' };
const perro = { tipo: 'perro' };

const numbers = [1, 2, 3];
const numeros = [1, 2, 3];

const setByReferenceobj = new Set([animal, perro]);
const setByReferenceArr = new Set([numbers, numeros]);
// console.log('setByReferenceArr:', setByReferenceArr)


/*
  - Operador spread (propagador) + Ejemplo abecedario
    - Qué es el operador spread?
      El operador spread nos permite propagar los elementos de un iterable en otro.
      Por ej un iterable puede ser un string, un array, y un Set.
*/

// Como se utiliza

const characters = ['d','e','f']
const numeros2 = ['1','2','3']

const charsAndNums = [...abcCharacters,...characters,...numeros2]
characters[0] = 'A' // El metodo spread rompe la referencia
// console.log(charsAndNums)

const mySet = new Set([{ a: 1 }, { a: 1 }])
const result = [...mySet]
console.log('result:', result)

