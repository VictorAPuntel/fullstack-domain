// review08 - Find Most Expensive Product
// Goal: Given an array of products (objects), find the product with the highest price.
// Input: 1 array of objects (e.g. [{name:'Book', price:25}, ...])
// Process: Use a loop (for...of) or .reduce() to track the max price and its product
// Output: Display the product name and its price

function findMostExpensiveProduct() {
  const products = [
    { name: 'Book', price: 25 },
    { name: 'Pen', price: 5 },
    { name: 'Notebook', price: 15 },
    { name: 'Bag', price: 50 },
    { name: 'Headphones', price: 120 },
  ]

  /**
   * FOR OF
   * let maxProduct = products[0]
   * for (const product of products) {
   * if (product.price > maxProduct.price) {
   * maxProduct = product
    *}
  *}

  *console.log(
    *`The most expensive product is ${maxProduct.name} — $${maxProduct.price}`
  *)
   */
  const mostExpensive = products.reduce((acc, product) =>
    product.price > acc.price ? product : acc
  )

  console.log(
    `The most expensive product is ${mostExpensive.name} — $${mostExpensive.price}`
  )
}

findMostExpensiveProduct()
