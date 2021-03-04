class Rectangulo {
  area = 0;
  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;
    this.area = base * altura;
  }

}

const rect  = new Rectangulo(10,15)

console.log(rect);