// ex029 - Positive and Negative Counter
// Goal: Keep asking the user for numbers until they type 0, then display how many were positive and how many were negative
// Input: Multiple numbers (stop when the user enters 0)
// Process: Use a loop to read numbers, check if each is positive or negative, and count them separately
// Output: Display the total number of positive and negative values entered

const prompt = require('prompt-sync')({ sigint: true })

function positiveNegativeCounter() {
  let positive = 0
  let negative = 0
  let number

  do {
    number = Number(prompt('Write one number:'))

    if (number !== 0) {
      if (number > 0) {
        positive += 1
      } else {
        negative += 1
      }
    }
  } while (number !== 0)
  console.log(`The number of positive numbers is ${positive}`)
  console.log(`The number of negative numbers is ${negative}`)
}

positiveNegativeCounter()
