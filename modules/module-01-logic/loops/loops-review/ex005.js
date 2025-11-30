// review05 - Print Object Keys and Values
// Goal: Given an object, print both the key and its corresponding value using a for...in loop.
// Input: 1 object (hardcoded)
// Process: Use for...in to access each key, then get the value with object[key]
// Output: Display each key-value pair

function printObjectKeysAndValues() {
  let car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
  }
  for (const key in car) {
    console.log(`${key}: ${car[key]}`)
  }
}

printObjectKeysAndValues()
