// ex017 - Even Numbers Sum (Range Version)
// Goal: Ask the user for two numbers and display the sum of all even numbers between them.
// Input: 2 numbers (start and end)
// Process: Loop from the first number to the second, checking if each is even and adding it to the total
// Output: Display the total sum of all even numbers found in the range

const prompt = require('prompt-sync')({ sigint: true })

function evenNumbersSum() {
  let total = 0
  let start = Number(prompt('What number do you want to start with? '))
  let end = Number(prompt('What number do you want to end with? '))

  if (isNaN(start) || isNaN(end)) {
    console.log('Invalid input. Please enter a valid number.')
    return
  }

  while (start <= end) {
    if (start % 2 === 0) {
      total += start
    }
    start++
  }
  console.log(`\n The total sum is ${total.toFixed(0)}`)
}

evenNumbersSum()
