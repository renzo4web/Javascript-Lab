const marks = [80, 80, 50];

const calculate = (grade) => {
  let average = marks.reduce((acc, i) => (acc += i)) / marks.length;

  return average >= 90
    ? "A"
    : average >= 80 && average <= 89
    ? "B"
    : average >= 70 && average <= 79
    ? "C"
    : average >= 60 && average <= 69
    ? "C"
    : "F";
};

console.log(calculate(marks));
