function init (target) { //el target es la clase P
  return class extends target {
    nombre = 'Damian';
    apellido = 'Vigo';

    sayMyName() {
      return `${this.nombre} ${this.apellido}`;
    }
  }
}

@init
class P {
  constructor() {}

  sayMyName() {}
}

const p: P = new P();
console.log(p.sayMyName()); // Damian Vigo

