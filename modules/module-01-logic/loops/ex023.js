// ex023 - Reverse Counter
// Goal: Ask the user for a number and count down to 1
// Input: 1 number
// Process: Use a loop to decrease the counter and display each step
// Output: Show the countdown from the input number down to 1

const prompt = require('prompt-sync')({ sigint: true })

function reverseCounter() {
  let number = Number(prompt('Write one number: '))

  do {
    console.log(number)
    number--
  } while (number >= 1)
}

reverseCounter()
