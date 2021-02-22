const createPerson = (name, lastName) => ({name, lastName});

// console.log(createPerson("Renzo", "Barrios"));

// function argsToLog( ){
//     const [ first , second , third  ]  = arguments
//     return second
// }
// Despues del parametro rest no puede ir otro parametro
const argsToLog = (...arguments) => arguments;


const [nombre, apellido, edad, nacimiento, estaVivo] = argsToLog("Renzo", "Barrios", 24, 1997, true)
// console.log({nombre, apellido, edad, nacimiento, estaVivo});
// change the current name of the property
const {lastName: apellido2} = createPerson("Renzo", "Barrios")

// console.log({apellido2});

const tony = {
    name: "Tony Stark",
    codename: "Ironman",
    isLive: true,
    // age: 40,
    suits: ["Mark I", "Mark II", "Mark III", "Mark IV"]
}
const logProperties = ({name, codename, age = 0, suits}) => {
    console.log({name})
    console.log({age})
    console.log({codename})
    console.log({suits})
}

logProperties(tony);