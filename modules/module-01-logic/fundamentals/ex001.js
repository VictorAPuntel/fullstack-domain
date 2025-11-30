// ex001 - Read two numbers and display their sum
// Goal: Add two numbers and display the result
// Input: 2 numbers
// Process: Ask the user to enter two numbers, then show the result
// Output: The sum of the two numbers

const prompt = require('prompt-sync')({ sigint: true })

function sumTwoNumbers() {
  const number1 = Number(prompt('Enter the first number: '))
  const number2 = Number(prompt('Enter the second number: '))
  const sum = number1 + number2
  console.log(`The result of the sum is: ${sum}`)
}

sumTwoNumbers()
