const heroes = ["Batman", "Superman", "Mujer Maravilla", "Aquaman"]

console.warn("For in")

for (let i in heroes) {
    // console.log(heroes[i])
    for (let heroesKey in heroes[i]) {
        console.log(heroes[i][heroesKey])
    }
}

// console.warn("For of")
//
// for (let hero of heroes) {
//     console.log(hero)
// }
