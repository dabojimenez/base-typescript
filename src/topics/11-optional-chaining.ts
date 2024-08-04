// encadenamiento opcional


export interface Passenger {
    name: string;
    children?: string[];
}

const passengerUno: Passenger = {
    name: "Stalyn"
}

const passengerDos: Passenger = {
    name: "Marcela",
    children: ['Natalia', 'Elizabeth']
}

const printChildren = (passenger: Passenger): number => {
    // lo que hace e slo siguinete (passenger.children?.length)
    // ingres en el objeto en la propiedad (children) y usando (?) hacemos lo siguiente
    // si existe, devuelveme la longitud y si no existe sera undefine y con
    // ||, indicmaos que si es undefine, se le coloque el valor de 0, en este caso
    // el opcional chaining es si viene la propiedad usa la propiedad (?.length)
    // const howManyChildren = passenger.children?.length || 0;


    // si en caso, SI SIEMPRE recibire un valor usamos (!) = NOT NUL ASSERTION OPERATOR
    // y le indicmaos (children!) que siempre tendra la propeidad children
    // pero este estaria sujeto a una validacion previa
    // if (!passenger.children) return 0;
    // const howManyChildren = passenger.children!.length;

    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

printChildren(passengerDos);
printChildren(passengerUno);