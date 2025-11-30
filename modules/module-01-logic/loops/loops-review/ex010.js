// review10 - Average Product Price
// Goal: Given an array of products (objects), calculate the average price of all items.
// Input: 1 array of objects (e.g. [{name:'Book', price:25}, {name:'Pen', price:5}])
// Process: Use `.reduce()` to sum all prices, then divide by the array length
// Output: Display the average price of all products

function averageProductPrice() {
  const products = [
    { name: 'Book', price: 25 },
    { name: 'Pen', price: 5 },
    { name: 'Notebook', price: 15 },
    { name: 'Bag', price: 50 },
    { name: 'Headphones', price: 120 },
  ]

  const total = products.reduce((acc, product) => acc + product.price, 0)
  const averagePrice = total / products.length

  console.log(`Average price: $${averagePrice.toFixed(2)}`)
}

averageProductPrice()
