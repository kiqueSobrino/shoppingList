import { ShoppingLists } from './shopping-list';

// export const LISTS: ShoppingList[] = [
//   { id: 1, name: 'Súper' },
//   { id: 2, name: 'Mercadillo' },
//   { id: 3, name: 'Todo a 100' },
//   { id: 4, name: 'Bodega' }
// ];

// export const SUPER: ListProduct[] = [
//   { name: 'Patatas', price: '10' },
//   { name: 'Manzanas', price: '12' },
//   { name: 'Pescado', price: '33' }
// ];

// export const MERCADILLO: ListProduct[] = [
//   { name: 'Lechuga', price: '11' },
//   { name: 'Camisetas', price: '40' },
//   { name: 'Calcetines', price: '1' }
// ];

// export const LIST = ["a", "b"];

export const SHOPPINGLISTS: ShoppingLists[] = [  
  {
    name: 'super',
    products: [
      { name: 'Patatas', price: '10' },
      { name: 'Manzanas', price: '12' },
      { name: 'Pescado', price: '33' }
    ]
  },
  { 
    name: 'mercadillo',
    products: [
      { name: 'Lechuga', price: '11' },
      { name: 'Camisetas', price: '40' },
      { name: 'Calcetines', price: '1' }
    ]
  },
  {
    name: 'todo a 100',
    products: [
      { name: 'Pilas', price: '1' },
      { name: 'Cartulinas', price: '1' },
      { name: 'Papel de regalo', price: '1' },
      { name: 'Celo', price: '1' }
    ]
  }
];

