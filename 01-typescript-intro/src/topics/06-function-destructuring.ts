export interface Product {
  description: string;
  price: number;
}

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

const phone: Product = {
  description: "Nokia A1",
  price: 150.0,
};

const tablet: Product = {
  description: "iPad Air",
  price: 250.0,
};

const shoppingCart: Product[] = [phone, tablet];

const tax: number = 0.15;

//Clean code states that a functions must have max 3 arguments
//const taxCalculation = (options: TaxCalculationOptions): [number, number] => {
//const taxCalculation = ({tax,products}: TaxCalculationOptions): [number, number] => {
export const taxCalculation = (options: TaxCalculationOptions): [number, number] => {
  let total = 0;
  const { tax, products } = options;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
};

const [total, taxTotal] = taxCalculation({ products: shoppingCart, tax: tax });

console.log("Total ", total);
console.log("Tax ", taxTotal);

