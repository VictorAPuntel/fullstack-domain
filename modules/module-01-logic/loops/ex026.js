// ex026 - Average Until Zero
// Goal: Keep asking the user for numbers until they type 0, then display the average of all entered numbers
// Input: Multiple numbers (stop when the user enters 0)
// Process: Use a loop to read numbers, sum them, count how many were entered, and calculate the average at the end
// Output: Display the average of all numbers entered (sum / count)

const prompt = require('prompt-sync')({ sigint: true })

function averageUntilZero() {
  let sum = 0
  let count = 0
  let number

  do {
    number = Number(prompt('Write one number: '))

    if (number > 0) {
      sum += number
      count++
    }
  } while (number !== 0)

  if (count > 0) {
    console.log(`The average is ${(sum / count).toFixed(2)}`)
  } else {
    console.log('No valid numbers entered.')
  }
}

averageUntilZero()
