// review07 - Sum Values Inside an Object Array
// Goal: Given an array of objects representing products, calculate the total sum of all prices.
// Input: 1 array of objects (e.g. [{name: 'Book', price: 25}, {name: 'Pen', price: 5}])
// Process: Use a loop (for...of) or .reduce() to sum all `price` values
// Output: Display the total sum of all prices

function sumObjectArrayValues() {
  let products = [
    { name: 'Book', price: 25 },
    { name: 'Pen', price: 5 },
    { name: 'Notebook', price: 15 },
    { name: 'Bag', price: 50 },
  ]
  // let sum = 0
  // for (const product of products) {
  //   sum += product.price
  // }

  // console.log(`Total price: ${sum}`)
  let sum = products.reduce((acc, product) => acc + product.price, 0)
  console.log(`Total price: ${sum}`)
}

sumObjectArrayValues()
