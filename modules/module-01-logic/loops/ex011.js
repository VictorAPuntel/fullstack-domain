// ex011 - Simple Counter
// Goal: Ask the user for a number and count from 1 up to that number.
// Input: 1 number
// Process: Use a loop to display all numbers from 1 to the input value
// Output: The full counting sequence

const prompt = require('prompt-sync')({ sigint: true })

function simpleCounter() {
  const limit = Number(prompt('What number do you want to count up to? '))

  if (isNaN(limit) || limit < 1) {
    console.log('Please enter a valid positive number.')
    return
  }

  for (let i = 1; i <= limit; i++) {
    console.log(i)
  }
}

simpleCounter()
