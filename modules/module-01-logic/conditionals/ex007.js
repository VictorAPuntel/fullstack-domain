// ex007 - Ask for a number and say if it is positive, negative, or zero
// Goal: Read a number and check whether it is positive, negative, or zero
// Input: 1 number
// Process: Check if it is greater than, less than, or equal to 0
// Output: Display a message according to the result

const prompt = require('prompt-sync')({ sigint: true })

function positiveNegativeOrZero() {
  const number = Number(prompt('Enter a number: '))

  if (number > 0) {
    console.log('Positive')
  } else if (number < 0) {
    console.log('Negative')
  } else {
    console.log('Zero')
  }
}

positiveNegativeOrZero()
