import { Product, taxtCalculation } from "./06-functions-destructuring";

// las importaciones o exportaciones no es mas que tener una funcinalidad encapsulada
const shoppingCart: Product[] = [
    {
        description: 'nokia',
        price: 120
    },
    {
        description: "nokia dos",
        price: 520
    }
];

const [total, tax] = taxtCalculation({
    products: shoppingCart,
    tax: 0.20
});

console.log('Total', total);
console.log('Tax', tax);

