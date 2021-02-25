const cars = ["Ford", "GME", "Toyota", "Mercedes"]

let i=0;
// Also we can use while( i < cars.length)
// but the "undefined" also is false , so when i becomes greater than cars.length the
// while loop is broken

while (cars[i]) {
    console.log(cars[i])
    i++
}