function deNico(key, m) {
  if (key.length === 1) {
    return m;
  }
  const order = key.split("").sort();

  const deco = key.split("").map((char) => {
    if (order.indexOf(char) >= 0) {
      return order.indexOf(char) + 1;
    }
  });

  let t = [];

  var i,
    j,
    temporary,
    chunk = key.length;
  for (i = 0, j = m.length; i < j; i += chunk) {
    temporary = m.slice(i, i + chunk).split("");
    // do whatever
    //
    t.push(temporary);
  }

  console.log(deco);

  console.log(t);
}

deNico("crazy", "cseerntiofarmit on  "); //,"secretinformation" );
deNico("crazy", "cseerntiofarmit on"); //,"secretinformation" );
deNico("abc", "abcd"); //,"abcd" );
deNico("ba", "2143658709"); //, "1234567890");
deNico("a", "message"); //"message" );
