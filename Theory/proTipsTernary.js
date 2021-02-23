const max = (a, b) => a > b ? a : b;
const hasMembership = (member) => member ? "$2" : "$20";


// console.log(max(5, 89))
// console.log(hasMembership(true))

const isGood = true;

const bestPlayers = [
    "Ronaldo",
    "Cr7",
    "Ban Vasten",
    isGood ? "Maradona" : "Messi"
]

// console.log(bestPlayers)


const score = 100;

const studentScore =
    (score >= 95) ? "A+" :
        (score >= 90) ? "A" :
            (score >= 75) ? "B+" :
                (score >= 60) ? "B" : "C";


console.log(studentScore)