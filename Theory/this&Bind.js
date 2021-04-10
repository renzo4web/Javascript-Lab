const jsDeveloper = {
  name: 'Renzo',
  mainLanguaje: 'Javascript',
  logMainLanguaje: function () {
    console.log(`My Favourite Lanjuage is ${this.mainLanguaje}`);
    (() => console.log(`My Name is ${this.name}`))();
  },
};

/* Bind */

function coolestDeveloper() {
  console.log(`The coolest developer is ${this.name}`);
}

const logCoolestDeveloper = coolestDeveloper.bind(jsDeveloper);
logCoolestDeveloper()