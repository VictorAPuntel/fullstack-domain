// ex042 - Filter Even Numbers
// Goal: Ask the user for 6 numbers, store them in an array, and display only the even ones.
// Input: 6 numbers
// Process: Use a loop or array method to filter out even numbers
// Output: Display all even numbers from the array

const prompt = require('prompt-sync')({ sigint: true })

function filterEvenNumbers() {
  let numbers = []

  for (let i = 0; i < 6; i++) {
    let num = Number(prompt('Write one number: '))
    numbers.push(num)
  }

  let evens = numbers.filter((num) => num % 2 === 0)
  console.log(`Even numbers: ${evens.join(', ')}`)
}

filterEvenNumbers()
