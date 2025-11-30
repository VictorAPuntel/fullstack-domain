// ex032 - Find the Largest Number
// Goal: Read 5 numbers into an array and display which one is the largest.
// Input: 5 numbers
// Process: Loop through the array to find the highest value
// Output: Display the largest number

const prompt = require('prompt-sync')({ sigint: true })

function findLargestNumber() {
  let numbers = []

  for (let i = 1; i <= 5; i++) {
    let num = Number(prompt('Write one number:'))
    numbers.push(num)
  }

  let largest = numbers[0]

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i]
    }
  }

  /**
   * OR
   * let largest = Math.max(...numbers)
   */

  console.log(`The highest value found is ${largest}`)
}

findLargestNumber()
