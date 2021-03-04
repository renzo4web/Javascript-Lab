class Person {
  static constructorByObj({ firstName, lastName, city }) {
    return new Person(firstName, lastName, city);
  }

  firstName;
  lastName;
  city;

  constructor(firstName, lastName, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
  }

  getPerson() {
    console.log(`First Name: ${this.firstName}`);
  }
}

const userObj = {
  firstName: "Lenny",
  lastName: "Hogar",
  city: "EEUU",
};

const user1 = new Person("Renzo", "Barrios", "Argentina");
const user2 = Person.constructorByObj(userObj);

user1.getPerson();
user2.getPerson();
