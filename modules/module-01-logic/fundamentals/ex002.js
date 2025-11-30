// ex002 - Read 3 numbers and display their average
// Goal: Show the average of 3 numbers
// Input: 3 numbers
// Process: Calculate the average of the numbers
// Output: Display the average with two decimal places

const prompt = require('prompt-sync')({ sigint: true })

function averageThreeNumbers() {
  const number1 = Number(prompt('Enter the 1st number: '))
  const number2 = Number(prompt('Enter the 2nd number: '))
  const number3 = Number(prompt('Enter the 3rd number: '))

  const average = (number1 + number2 + number3) / 3

  console.log(`The average of the entered numbers is: ${average.toFixed(2)}`)
}

averageThreeNumbers()
