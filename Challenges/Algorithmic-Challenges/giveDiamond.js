function diamond(n) {
    const f = "*"
    let o = []
    console.log(Math.ceil(n / 2))
    for (let i = 0; i <= Math.ceil(n / 2); i++) {
         o.push(" ");
        if (i % 2 !== 0) o.push(`${f.repeat(i)}\n`)
    }

    o.push(`${f.repeat(n)}\n`)

    for (let j = Math.round(n / 2); j >= 0; j--) {
        o.push(" ")

        if (j % 2 !== 0) o.push(`${f.repeat(j)}\n`)

    }
    return o.join("")
}


// console.log(diamond(3)); // " *\n***\n *\n")
console.log(diamond(5)); // " *\n***\n *\n")
console.log(diamond(7)); // " *\n***\n *\n")