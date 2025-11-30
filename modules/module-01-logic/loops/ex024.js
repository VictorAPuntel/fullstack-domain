// ex024 - Progressive Counter
// Goal: Ask the user for a number and count from 1 up to that number
// Input: 1 number
// Process: Use a loop to increase the counter and display each step
// Output: Show the count from 1 to the input number

const prompt = require('prompt-sync')({ sigint: true })

function progressiveCounter() {
  let number = Number(prompt('Write one number: '))
  let initial = 1
  do {
    console.log(initial)
    initial++
  } while (initial <= number)
}

progressiveCounter()
