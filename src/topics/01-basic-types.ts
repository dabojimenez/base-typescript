

const name: string = 'Nombre';
// name = '125';


// | => nos permite indicar el tipo de dato numbre O string
// let hpPoints: number | string = 95;
// hpPoints = 'cadena';

let hpPoints: number | 'FULL' = 95;
hpPoints = 'FULL'

const isAlive: boolean = true;

console.log({
    name,
    hpPoints,
    isAlive
})

export { };