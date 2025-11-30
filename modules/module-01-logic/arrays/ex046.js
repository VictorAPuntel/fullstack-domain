// ex046 - Find the Largest Value (using .reduce())
// Goal: Ask the user for 5 numbers, store them in an array, and find the largest one using `.reduce()`.
// Input: 5 numbers
// Process: Use `.reduce()` to compare each element and keep the largest
// Output: Display the largest number in the array

const prompt = require('prompt-sync')({ sigint: true })

function findLargestValue() {
  let numbers = []

  for (let i = 0; i < 5; i++) {
    let num = Number(prompt('Write one number: '))
    numbers.push(num)
  }

  let largest = numbers.reduce((acc, num) => (num > acc ? num : acc))
  console.log(`The largest element is ${largest}`)
}

findLargestValue()
