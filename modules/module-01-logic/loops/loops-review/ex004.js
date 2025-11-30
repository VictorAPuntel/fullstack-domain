// review04 - Print Object Keys
// Goal: Given an object, print all its keys using a for...in loop.
// Input: 1 object (hardcoded)
// Process: Use for...in to access each key
// Output: Display each key in the console

function printObjectKeys() {
  let person = {
    name: 'Alice',
    age: 25,
    city: 'New York',
  }

  for (const key in person) {
    console.log(key)
  }
}

printObjectKeys()
