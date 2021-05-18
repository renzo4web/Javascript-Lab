const form = document.getElementById('worksForms');
const btnSubmit = document.getElementById('btnSubmit');

class Employee {

  name;
  workedHours = 0;
  hoursPrice = 0;
  children = 0;

  constructor(name, workedHours, hoursPrice, children) {
    this.name = name;
    this.workedHours = parseFloat(workedHours);
    this.hoursPrice = parseFloat(hoursPrice);
    this.children = parseInt(children);
  }


  get wage() {
    return (this.workedHours >= 160)
        ? 160 * this.hoursPrice
        : this.workedHours * this.hoursPrice;
  }

  get total() {
    return (this.wage + this.bonusForChildren + this.bonus) - this.rent;
  }

  get bonusForChildren() {
    return 60.0 * this.children;
  }

  get totalWithoutRent() {
    return (this.wage + this.bonusForChildren + this.bonus);
  }

  get bonus() {
    if (this.workedHours > 160) {
      return (this.workedHours - 160) * (this.hoursPrice * 2);
    }
    return 0;
  }

  get rent() {
    if (this.wage + this.bonusForChildren + this.bonus > 1500) {
      return ((this.wage + this.bonusForChildren + this.bonus) * 0.08);
    }
    return 0;
  }
}

let employees = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const [name, workedHours, hoursPrice, children] = document.querySelectorAll(
      'form input');

  employees.push(
      new Employee(name.value, workedHours.value, hoursPrice.value,
          children.value));

  console.table(employees);

});