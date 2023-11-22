import products from "./mock.json" assert {type:"json"} ;
console.log(products);

import product from "./mock.json" assert {type: "json"};


// Estrapola la lista dei prodotti
const productList = product.productsList;

// Itera sulla lista dei prodotti
productList.forEach(product => {
  // Estrapola il prezzo di ciascun prodotto
  const price = product.price;
  
  // Stampa il prezzo
  console.log(price);

  const produc = products.productsList.find(produc => produc.id === 8)
  const productNames = products.productsList.map(product => product.name);

  // Estrapola il nome di ciascun prodotto
  const name = product.name;

  // Estrapola la descrizione di ciascun prodotto
  const description = product.description;

  // Estrapola la disponibilità (stock) di ciascun prodotto
  const stock = product.stock;


  console.log("Prezzo:", price);
  console.log("Nome:", name);
  console.log("Descrizione:", description);
  console.log("Disponibilità:", stock);
  console.log(products.productsList[2]);
  console.log(produc);
  console.log(productNames)
});