// ex045 - Sum All Elements (using .reduce())
// Goal: Ask the user for 5 numbers, store them in an array, and calculate the total sum using the `.reduce()` method.
// Input: 5 numbers
// Process: Use `.reduce()` to accumulate the sum of all elements
// Output: Display the total sum of the numbers

const prompt = require('prompt-sync')({ sigint: true })

function sumAllElements() {
  let numbers = []

  for (let i = 0; i < 5; i++) {
    let num = Number(prompt('Write one number: '))
    numbers.push(num)
  }

  let sum = numbers.reduce((acc, num) => acc + num, 0)
  console.log(`The total sum is ${sum}`)
}

sumAllElements()
