// Los DECORADORES nos ayudan mucho a crear nuestra PROPIA libreria o framework
// son funciones espciales que se adjuntan a diferentes objetos

// ejemplo de decorador, y se puede colocar en muchos meotdos usanod el @
function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'Nueva propiedad';
        hello = 'override';
    }
}



// agregamos la funcionalidad extra que esta definida en el decorador
@classDecorator
export class SuperClass {

    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola mundo');

    }
}

// imprimimos la definicion de la clase, NO UNA INSTANCIA
console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);
