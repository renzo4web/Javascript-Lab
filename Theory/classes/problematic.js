const user1 = {
  name: 'Hey',
  age: 20,
  printName() {
    console.log(`Nombre:${this.name}`);
  },
};

const user2 = {
  name: 'Yea',
  age: 30,
};
// This is not recommended anymore


// Deprecated solution to create a class in JS
function User(name, age) {
  this.name = name;
  this.age = age;
  this.printName = function() {
    console.log(`Nombre:${this.name}`);
  };
}

const user3 = new User('fuck', 55);

console.log(user3);
user3.printName()