// ex036 - Find the Smallest Number
// Goal: Read 5 numbers into an array and display which one is the smallest.
// Input: 5 numbers
// Process: Loop through the array to find the lowest value
// Output: Display the smallest number

const prompt = require('prompt-sync')({ sigint: true })

function smallestNumber() {
  let numbers = []

  for (let i = 0; i < 5; i++) {
    let num = Number(prompt('Wrute one number: '))
    numbers.push(num)
  }

  let smallest = numbers[0]

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i]
    }
  }

  /**
   * OR
   * let smallest = Math.min(...numbers)
   */

  console.log(`The smallest value found is ${smallest}`)
}

smallestNumber()
