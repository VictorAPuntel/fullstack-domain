// review09 - Find Cheapest Product
// Goal: Given an array of products (objects), find the one with the lowest price.
// Input: 1 array of objects (e.g. [{name:'Book', price:25}, ...])
// Process: Use .reduce() to compare prices and keep the cheapest product
// Output: Display the product name and its price

function findCheapestProduct() {
  const products = [
    { name: 'Book', price: 25 },
    { name: 'Pen', price: 5 },
    { name: 'Notebook', price: 15 },
    { name: 'Bag', price: 50 },
    { name: 'Headphones', price: 120 },
  ]

  const cheaper = products.reduce((acc, product) =>
    product.price < acc.price ? product : acc
  )

  console.log(
    `The most cheapest product is ${cheaper.name} — $${cheaper.price}`
  )
}

findCheapestProduct()
