// ex047 - Find the Smallest Value (using .reduce())
// Goal: Ask the user for 5 numbers, store them in an array, and find the smallest one using `.reduce()`.
// Input: 5 numbers
// Process: Use `.reduce()` to compare each element and keep the smallest
// Output: Display the smallest number in the array

const prompt = require('prompt-sync')({ sigint: true })

function findSmallestValue() {
  let numbers = []

  for (let i = 0; i < 5; i++) {
    let num = Number(prompt('Write one number: '))
    numbers.push(num)
  }

  let smallest = numbers.reduce((acc, num) => (num < acc ? num : acc))
  console.log(`The smallest element is ${smallest}`)
}

findSmallestValue()
