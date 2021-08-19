//Deep Object Mutability
//Consider the following object representing a user, Joe, and his dog, Buttercup. We use Object.freeze to preserve our object and then attempt to mutate Buttercup's name. What gets logged?

const user = {
  name: "Joe",
  age: 25,
  pet: {
    type: "dog",
    name: "Buttercup",
  },
};

//The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.

// Object.freeze do not freeze deep object types
Object.freeze(user);

user.pet.name = "Daffodil";

console.log(user.pet.name); // "Daffodil";
