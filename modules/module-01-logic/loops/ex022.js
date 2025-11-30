// ex022 - Factorial Calculator
// Goal: Ask the user for a number and display its factorial
// Input: 1 number
// Process: Multiply all integers from 1 up to the given number
// Output: Display the factorial result

const prompt = require('prompt-sync')({ sigint: true })

function factorialCalculator() {
  let number = Number(prompt('Write one number: '))
  let count = number
  let factorial = 1

  do {
    factorial = factorial * count
    count = count - 1
  } while (count > 1)

  console.log(`The factorial value of ${number} is ${factorial}`)
}

factorialCalculator()
