// ex031 - Sum of Array Elements
// Goal: Ask the user for several numbers (5), store them in an array, and display the total sum.
// Input: 5 numbers
// Process: Loop through the array to calculate the total sum
// Output: Display the total sum of all numbers entered

const prompt = require('prompt-sync')({ sigint: true })

function sumArrayElements() {
  let numbers = []
  let sum = 0
  for (let index = 1; index <= 5; index++) {
    let num = Number(prompt('Write one number: '))
    numbers.push(num)
  }

  for (let i = 0; i <= numbers.length; i++) {
    sum += numbers[i]
  }

  console.log(`The total sum is: ${sum}`)
}

sumArrayElements()
