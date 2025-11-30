// ex014 - Countdown
// Goal: Ask the user for a number and display a countdown from that number to 0.
// Input: 1 number
// Process: Use a loop to decrease the counter until it reaches 0
// Output: Display all numbers in descending order, from the input down to 0

const prompt = require('prompt-sync')({ sigint: true })

function countdown() {
  let number = Number(prompt('Enter a number: '))

  if (isNaN(number)) {
    console.log('Invalid input. Please enter a valid number.')
    return
  }
  while (number >= 0) {
    console.log(`${number}`)
    number--
  }
}

countdown()
