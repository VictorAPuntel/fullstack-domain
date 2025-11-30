// ex044 - Square All Numbers
// Goal: Ask the user for 5 numbers, store them in an array, and create a new array with each number squared.
// Input: 5 numbers
// Process: Use the `.map()` method to square each element (num ** 2)
// Output: Display the new array with squared values

const prompt = require('prompt-sync')({ sigint: true })

function squareAllNumbers() {
  let numbers = []

  for (let i = 0; i < 5; i++) {
    let num = Number(prompt('Write one number: '))
    numbers.push(num)
  }

  let square = numbers.map((num) => num ** 2)
  console.log(`Squared numbers: ${square.join(', ')}`)
}

squareAllNumbers()
