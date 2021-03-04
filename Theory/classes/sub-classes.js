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

  get isMembership() {
    return this._isMembership;
  }

  // Methods
  getName() {
    console.log('Name:' + this.name);
  }
}

class Premium extends User {

  constructor(name, userId, isMembership, discountTier) {
    super(name, userId, isMembership);
    this._discountTier = discountTier;

  }

  _discountTier = '';

  get discountTier() {
    return this._discountTier;
  }
}

let user1 = new User('Renzo', 558548, true);
let user2 = new User('Lenny', 558565, false);
let user3 = new User('Carl', 556421, true);

const verifyUsers = (user) => {
  if (user.isMembership) {
    return new Premium(user.name, user.id, user.isMembership, 'BLACK');
  }
};
const userPremium = verifyUsers(user3);

console.log(userPremium.discountTier);