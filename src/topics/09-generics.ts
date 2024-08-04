
// <T>: indicamos que es un tipo de dato generico, string, number, bool, etc, hasta que lo usemos
// y es muy util
export function whatsMyType<T>(argument: T): T {
    return argument;
}


// <>: le amndmaos el genrico que deseamos definir o vamos a usar
const amIString = whatsMyType<string>('Hola mundo');
const amINumber = whatsMyType<number>(10);
const amIArray = whatsMyType<number[]>([1, 2, 3, 6]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));
