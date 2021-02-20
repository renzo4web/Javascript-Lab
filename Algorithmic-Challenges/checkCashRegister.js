const DENOMINATIONS = {
    'PENNY': 1,
    'NICKEL': 5,
    'DIME': 10,
    'QUARTER': 25,
    'ONE': 100,
    'FIVE': 500,
    'TEN': 1000,
    'TWENTY': 2000,
    'ONE HUNDRED': 10000,
};

function checkCashRegister(price, cash, cid) {
    let changeSum = cash * 100 - price * 100;
    let changeSumCheck = changeSum;
    let change = [];
    let status = '';

    let cidSum = 0;
    let filterCid = cid.filter(elem => elem[1] !== 0).reverse();

    filterCid.forEach(elem => {
        let curr = elem[0];
        let currSum = elem[1] * 100;
        cidSum += currSum;
        let amount = 0;
        while (changeSum >= DENOMINATIONS[curr] && currSum > 0) {
            amount += DENOMINATIONS[curr];
            changeSum -= DENOMINATIONS[curr];
            currSum -= DENOMINATIONS[curr];
        }

        if (amount !== 0) {
            change.push([curr, amount / 100]);
        }

    });

    let y = 0
    change.forEach(ele => {
        // console.log(ele[1]);
        y += ele[1]
    })
    let yRound = Math.round(y)
    let cidSumRound = Math.round(cidSum / 100)
    let changeSumCheckRound = Math.round(changeSumCheck / 100)

    // console.log(y)
    if (changeSumCheckRound >= yRound && cidSumRound > changeSumCheckRound ) {
      status = 'OPEN';
    }
    else if ( changeSumCheckRound === yRound ) {
      status = 'CLOSED';
      return ({
        status: status,
        change: cid,
      });
    }
    else  {
      status  = "INSUFFICIENT_FUNDS"
      return ({
        status: status,
        change: [],
      });
    }

    return ({
        status: status,
      change: change,
    });
}

console.log(checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]])); //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

console.log(checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]])); //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
//
console.log(checkCashRegister(19.5, 20, [
  ['PENNY', 0.01],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]])); //should return {status: "INSUFFICIENT_FUNDS", change: []}.
//
console.log(checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 1],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]])); //should return {status: "INSUFFICIENT_FUNDS", change: []}.
//
console.log(checkCashRegister(19.5, 20, [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]])); //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}