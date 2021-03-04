class Singleton {
  static instancia;

  nombre = "";

  constructor(nombre = "") {
    if (!!Singleton.instancia) return Singleton.instancia;
    Singleton.instancia = this;
    this.nombre = nombre;
  }
}

const user1 = new Singleton("Messi");
const user2 = new Singleton("Ronaldo");

console.log(`User 1:${user1.nombre}`);
console.log(`User 2:${user2.nombre}`);
