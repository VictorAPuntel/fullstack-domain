// ex050 - Uppercase Names
// Goal: Ask the user to enter 5 names, store them in an array, and then create a new array with all names in uppercase.
// Input: 5 strings (names)
// Process: Use the `.map()` method with `.toUpperCase()`
// Output: Display the new array with uppercase names

const prompt = require('prompt-sync')({ sigint: true })

function uppercaseNames() {
  let names = []

  for (let i = 0; i < 5; i++) {
    let name = prompt('Write one name: ')
    names.push(name)
  }

  let uppercased = names.map((name) => name.toUpperCase())
  console.log(uppercased.join(','))
}

uppercaseNames()
