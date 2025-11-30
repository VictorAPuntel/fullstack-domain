// ex088 - Array of Products → Object Grouped by Category
// Goal: Given an array of products with name and category, group them by category.
// Input: 1 array of objects (e.g. [{ name: 'Shirt', category: 'Clothing' }, { name: 'Apple', category: 'Food' }])
// Process: Create an object where each key is a category and the value is an array of product names in that category.
// Output: Display the resulting grouped object

function groupProductsByCategory() {
  const products = [
    { name: 'Shirt', category: 'Clothing' },
    { name: 'Pants', category: 'Clothing' },
    { name: 'Apple', category: 'Food' },
    { name: 'Bread', category: 'Food' },
    { name: 'TV', category: 'Electronics' },
    { name: 'Headphones', category: 'Electronics' },
  ]

  const categorizedProducts = products.reduce((object, item) => {
    if (!object[item.category]) {
      object[item.category] = []
    }
    object[item.category].push(item.name)
    return object
  }, {})

  console.log(categorizedProducts)
}

groupProductsByCategory()
