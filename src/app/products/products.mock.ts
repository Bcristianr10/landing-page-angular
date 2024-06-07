export const productsList: Product[] = [
  {
    id: 1,
    name: 'Smartphone',
    price: 1000,
    description: 'Smartphone is a mobile phone'
  },
  {
    id: 2,
    name: 'Laptop',
    price: 2000,
    description: 'Laptop is a desktop computer'
  },
  {
    id: 3,
    name: 'Tablet',
    price: 3000,
    description: 'Tablet is a mobile computer'
  },
  {
    id: 4,
    name: 'Desktop',
    price: 4000,
    description: 'Desktop is a computer'
  },
  {
    id: 5,
    name: 'Monitor',
    price: 5000,
    description: 'Monitor is a computer monitor'
  },
  {
    id: 6,
    name: 'Keyboard',
    price: 6000,
    description: 'Keyboard is a computer keyboard'
  },
  {
    id: 7,
    name: 'Mouse',
    price: 7000,    
  }
];

export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}