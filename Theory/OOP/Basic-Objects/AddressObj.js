// const address = {
//   street: 'Chpa',
//   city: 'Mendoza',
//   zipCode: 5501,
//   showAddress() {
//     console.log(this);
//   },
// };

// Factory Functions

const createAddressObj = (street, city, zipCode) => {
  return {
    street,
    city,
    zipCode,
    showAddress() {
      console.log(this);
    },
  };
};

// By constructor

function Address(street, city, zipCode) {
  (this.street = street),
    (this.city = city),
    (this.zipCode = zipCode),
}

const newAdrees = new Address('Chapa', 'Mendoza', 5502);

newAdrees.showAddress();
