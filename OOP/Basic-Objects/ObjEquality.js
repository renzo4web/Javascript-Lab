const createAddressObj = (street, city, zipCode) => {
  return {
    street,
    city,
    zipCode,
  };
};

let addres1 = createAddressObj('Chapa', 'Mendoza', 5501);
let addres2 = createAddressObj('Chapa', 'Mendoza', 5502);
let addres3 = addres1 
// let addres2 = createAddressObj('Malibu', 'Miami', 10110);

const areEqual = (address1, address2) => {
  // Check if the thow object are equal
  for (const key in address1) {
      if(address1[key] !== address2[key] ) return false
  }
  return true
};

// same memory location
const areSame = (addres1, addres2) => addres1 === addres2;

console.log(areEqual(addres1, addres2)); //
console.log(areSame(addres1,addres3));