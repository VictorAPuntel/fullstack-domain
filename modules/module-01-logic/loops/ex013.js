// ex013 - Custom Multiplication Table
// Goal: Ask the user for a number and display its multiplication table from 1 to 10.
// Input: 1 number
// Process: Loop from 1 to 10, multiplying the input number by the loop counter
// Output: Display the complete multiplication table

const prompt = require('prompt-sync')({ sigint: true })

function multiplicationTable() {
  const number = Number(prompt('Enter a number: '))

  if (isNaN(number)) {
    console.log('Invalid input. Please enter a valid number.')
    return
  }

  let index = 1
  while (index <= 10) {
    console.log(`${number} x ${index} = ${number * index}`)
    index++
  }
}

multiplicationTable()
