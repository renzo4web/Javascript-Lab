const numConvertor = [
    [1000, 'M'],
    [900, 'CM'],
    [800, 'DCCC'],
    [700, 'DCC'],
    [600, 'DC'],
    [500, 'D'],
    [400, 'CD'],
    [300, 'CCC'],
    [200, 'CC'],
    [100, 'C'],
    [90, 'XC'],
    [80, 'LXXX'],
    [70, 'LXX'],
    [60, 'LX'],
    [50, 'L'],
    [40, 'XL'],
    [30, 'XXX'],
    [20, 'XX'],
    [10, 'X'],
    [9, 'IX'],
    [8, 'VIII'],
    [7, 'VII'],
    [6, "VI"],
    [5, 'V'],
    [4, 'IV'],
    [3, "III"],
    [2, "II"],
    [1, 'I']
];

function convertToRoman(num) {

    //Break the number into Thousands, Hundreds, Tens and Ones, and write down each in turn.
    let numberParts = []
    let strNum = num.toString()

    for (let i = 0; i < strNum.length; i++) {
        let j = 0

        let zeros = strNum.slice(i + 1,).length;
        let zeroString = []
        while (j < zeros) {
            j++
            zeroString.push(0)
        }
        (zeros === 0) ? numberParts.push(strNum[i]) : numberParts.push(`${strNum[i]}${zeroString.join("")}`)
    }


    let romanNumbers = []
    // Search in the roman numbers
    for (let i = 0; i < numberParts.length; i++) {

        for (let j = 0; j < numConvertor.length; j++) {

            if (parseInt(numberParts[i]) === numConvertor[j][0]) {
                romanNumbers.push(numConvertor[j][1])
            }

        }


    }
    if (num > 1999) {
        let j = 0
        let stringM = []
        while (j < parseInt(num.toString()[0])) {
            j++
            stringM.push("M")
        }
        console.log(stringM.join("") + romanNumbers.join(""))
    } else {
        console.log(romanNumbers.join(""))

    }


}

// convertToRoman(36);
// convertToRoman(5);
// convertToRoman(83) //should return "LXXXIII"
// convertToRoman(798) //should return "DCCXCVIII"
// convertToRoman(68) //should return "LXVIII"
// convertToRoman(2014) //should return "MMXIV"
convertToRoman(3999) //should return "MMMCMXCIX"
convertToRoman(1004) //should return "MIV"
convertToRoman(1006) //should return "MVI"
convertToRoman(1023) //should return "MXXIII"