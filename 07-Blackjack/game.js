let deck = []

const player = {
    score : 0,
    stack : [],
    win:  false,
}

const machine = {
    score : 0,
    stack : [],
    win:  false,
}

const generateRndNum = (range)=>{
    return Math.floor(Math.random()*range)
}

const generateDeck =(who) =>{
    const cardTypes  =["C","D","H","S"] //e.g 2C
    const others = ["J","K","Q","A"] // ej 2

    const rnd = generateRndNum(11)

    if(rnd < 10 && rnd >=2){
        const cardTypeRnd  = generateRndNum(4)
            who.stack.push([rnd+cardTypes[cardTypeRnd]])
            
    }else{
            who.stack.push(others[generateRndNum(4)] +cardTypes[generateRndNum(4)] )
    }
    console.log(rnd);
    console.log(who.stack);

}

generateDeck(player)
generateDeck(machine)
