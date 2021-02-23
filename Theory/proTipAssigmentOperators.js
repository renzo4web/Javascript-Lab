const iUndefined = undefined
const isNull = null
const isFalse = false

// When the two conditions are true js take the las condition
// in this case "Hola Mundo"
const a1  = true && "Hola Mundo";
const a2 = "isFalse" || isFalse
const a3 = isFalse || iUndefined || isNull || "ADSD"

console.log({a3})