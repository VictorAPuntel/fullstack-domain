// ex012 - Sum of Even Numbers
// Goal: Ask the user for 5 numbers and display the sum of the even ones.
// Input: 5 numbers
// Process: Loop through the inputs, check if each number is even, and sum them
// Output: Display the sum of all even numbers

const prompt = require('prompt-sync')({ sigint: true })

function sumOfEvenNumbers() {
  let sum = 0

  for (let index = 1; index <= 5; index++) {
    const number = Number(prompt(`Enter number ${index}: `))

    if (isNaN(number)) {
      console.log('Invalid input. Please entar a valid number.')
      index-- // repeats the same iteration
      continue
    }

    if (number % 2 === 0) {
      sum += number
    }
  }
  console.log(`The sum of even numbers is: ${sum}`)
}

sumOfEvenNumbers()
