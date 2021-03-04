class User {

  static _counter = 0;
  // Properties
  name;
  userId;
  username;

  // Constructor

  constructor(name, userId, isMembership) {
    this.name = name;
    this.userId = userId;
    this._isMembership = isMembership;

    (this._isMembership) && User._counter++;
  }

  // Setters

  static get countMemberships() {
    return User._counter;
  }

  // Getters

  set setUsername(value) {
    this.username = value.toUpperCase();
  }


// Methods
  getName() {
    console.log('Name:' + this.name);
  }
}

const user1 = new User('Renzo', 558548, true);
const user2 = new User('Lenny', 558565, false);
const user3 = new User('Carl', 556421, true);

console.log("Users with membership: "+ User.countMemberships);