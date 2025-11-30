// ex003 - Ask for a number and display its double and half
// Goal: Read one number and show its half and double
// Input: 1 number
// Process: Calculate the half and the double
// Output: Display both results formatted

const prompt = require('prompt-sync')({ sigint: true })

function halfAndDoubleNumber() {
  const number = Number(prompt('Enter a number: '))

  const half = number / 2
  const double = number * 2

  console.log(`Half = ${half.toFixed(2)}`)
  console.log(`Double = ${double.toFixed(2)}`)
}

halfAndDoubleNumber()
