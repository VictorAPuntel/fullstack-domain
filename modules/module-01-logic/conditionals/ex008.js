// ex008 - Check if the number is even or odd
// Goal: Ask for a number and tell whether it is even or odd
// Input: 1 number
// Process: Check if the remainder of the division by 2 is 0
// Output: Display a message according to the result

const prompt = require('prompt-sync')({ sigint: true })

function evenOrOdd() {
  const number = Number(prompt('Enter a number: '))

  if (number % 2 === 0) {
    console.log('Even')
  } else {
    console.log('Odd')
  }
}

evenOrOdd()
