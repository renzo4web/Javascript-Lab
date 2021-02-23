const dia = 4;
const currentTime = 8;
const openTime = ([0, 6].includes(dia)) ? 9 : 11;
const message = (currentTime >= openTime) ?
    `Esta abierto desde las ${openTime}`:
    `Esta cerrado hoy abrimos ${openTime}`

console.log(message)