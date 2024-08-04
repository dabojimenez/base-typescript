// una lcase, es un molde para crear objetos nuevos en este caso seran instancias
export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public name: string,
        private address: string = 'Sin direccion') {

    }
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         // super: es una funcion especial, que llama al constructor del padre
//         super(realName, 'Quito')
//     }
// }


export class Hero {
    // public person: Person;
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        // this.person = new Person(realName);
    }
}

const tony = new Person('Tony Stark', 'Quito');

const ironMan = new Hero('Iron Man', 45, 'Stalyn Jimenez', tony);

console.log(ironMan);
// console.log(ironMan.name);
// en la consola del anvegador se reflejara el valor, ya que este cdigo se transpila a JS
// console.log(ironMan.address);
