let a = 10
let b = a
a = 30

// the variables a and b are stored on different memory allocations
// only the value is copy
// console.log({a,b})

// Call by reference
// let renzo = { name : "Renzo"}
// let persona = renzo
// /*
// When we change the property also is changed on the first literal object,
//  because the two variables within the object assign are pointing to the same allocation in memory
// */
// persona.name = "Pinta"
// console.log({renzo, persona})


let renzo = {name: "Renzo"}
let persona = {...renzo}
/*
We can broke the reference by using the spread operator {...object}
*/
persona.name = "Pinta"
// console.log({renzo, persona})

const changeName = (foo) => {
    foo.name = "Tony"
    return foo
}

let peter = {name: "Peter"}
let tony = changeName({...peter})

// console.log({peter, tony})

// Also the spread operator work with arrays
const frutas = ["Manzana", "Pera", "Piña"]

console.time("spread")
const otrasFrutas = [...frutas]
console.timeEnd("spred")

otrasFrutas.push("Banana")

console.log({frutas, otrasFrutas})

