function search(arr, n) {
    let found = false;
    let indexOfFound = 0
    let top = arr.length
    let mid = arr.length / 2
    let inf = arr[0];
    for (let i = inf; i < top; i++) {

        let temp = 0
        if (arr[i] === n) {
            return `Found on index ${i}`;
        } else if (n < mid) {
            temp = mid
            top = temp
            mid = (top - mid) / 2

        } else {
            temp = mid
            inf = temp
            mid = (inf - mid) / 2
        }


    }

    return found;

}

console.log(search([1, 5, 9, 45, 60, 88], 9));