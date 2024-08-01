
interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia 1050",
    price: 150.50
}

const tablet: Product = {
    description: "Monitor Led",
    price: 560.99
}

const shoppingCart = [phone, tablet];
const tax = 0.15; // el impuesto sobre la venta

// una funcion si toma mas de 3 argumentos se aconseja pasar un Objeto, esto para el CLEAN CODE

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// function taxtCalculation(options: TaxCalculationOptions): [number, number] {
function taxtCalculation({ tax, products }: TaxCalculationOptions): [number, number] {
    // const { tax, products } = options;
    let total = 0;
    // barremos todos los productos y acumulamos en el total
    // options.products.forEach(producto => {
    // const { price } = producto;
    // options.products.forEach(({ price }) => {
    products.forEach(({ price }) => {
        total += price; // acumulamos en el total, el precio del producto
    });

    // return [total, total * options.tax];
    return [total, total * tax];
}


const [pos1, pos2] = taxtCalculation({ products: shoppingCart, tax: tax });

console.log('Total', pos1);
console.log('Tax', pos2);


export { }