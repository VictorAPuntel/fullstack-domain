// ex016 - Odd Numbers Counter
// Goal: Ask the user for two numbers and display all odd numbers between them.
// Input: 2 numbers (start and end)
// Process: Loop from the first number to the second, checking if each is odd
// Output: Display all odd numbers found in the range

const prompt = require('prompt-sync')({ sigint: true })

function oddNumberCounter() {
  let start = Number(prompt('What number do you want to start with? '))
  let end = Number(prompt('What number do you want to end with? '))

  if (isNaN(start) || isNaN(end)) {
    console.log('Invalid input. Please enter a valid number.')
    return
  }

  do {
    if (start % 2 !== 0) {
      console.log(`Odd number = ${start}`)
    }

    start++
  } while (start <= end)
}

oddNumberCounter()
