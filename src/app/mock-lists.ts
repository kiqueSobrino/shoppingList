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
//   { name: 'Calcetines', price: 1 }
// ];

// export const LIST = ["a", "b"];

export const SHOPPINGLISTS: ShoppingLists[] = [
  {
    id: 0,
    name: 'Super',
    date: "03/25/2015",
    products: [
      { name: 'Patatas', price: 10, qtty: 3, checked: false },
      { name: 'Manzanas', price: 12, qtty: 1, checked: true },
      { name: 'Pescado', price: 33, qtty: 1, checked: false }
    ]
  },
  {
    id: 1,
    name: 'Mercadillo',
    date: "03/25/2015",
    products: [
      { name: 'Lechuga', price: 11, qtty: 1, checked: true },
      { name: 'Camisetas', price: 40, qtty: 1, checked: false },
      { name: 'Calcetines', price: 1, qtty: 1, checked: false }
    ]
  },
  {
    id: 2,
    name: 'Todo a 100',
    date: "03/25/2015",
    products: [
      { name: 'Pilas', price: 1, qtty: 1, checked: false },
      { name: 'Cartulinas', price: 1, qtty: 1, checked: true },
      { name: 'Papel de regalo', price: 1, qtty: 1, checked: true },
      { name: 'Celo', price: 1, qtty: 1, checked: false }
    ]
  }
];

