const checkSpeed = (speed) => {
  const limit = 70,
        kmPerPoint = 5;
  let points =
            (speed < limit + kmPerPoint)
            ? "Ok"
            : Math.floor((speed - limit) / kmPerPoint);
  return points >= 12 ? "License Suspended" : `Points: ${points}`;
};

console.log(checkSpeed(130));
