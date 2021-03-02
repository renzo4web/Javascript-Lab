class User {

  // Properties
  name;
  userId;
  isMembership;

  // Constructor

  constructor(name, userId, isMembership) {
    this.name = name;
    this.userId = userId;
    this.isMembership = isMembership;
  }



}

const user1 = new User("Renzo",558548,true);

console.log(user1.isMembership);