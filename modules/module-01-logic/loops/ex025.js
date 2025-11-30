// ex025 - Sum Until Zero
// Goal: Keep asking the user for numbers and sum them until they type 0
// Input: Multiple numbers (stop when the user enters 0)
// Process: Use a loop to read numbers, add them to the total, and stop when 0 is entered
// Output: Display the total sum of all entered numbers

const prompt = require('prompt-sync')({ sigint: true })

function sumUntilZero() {
  let sum = 0
  let number

  do {
    number = Number(prompt('Write one number: '))

    if (number > 0) {
      sum += number
    }
  } while (number !== 0)

  console.log(`The total sum is ${sum}`)
}

sumUntilZero()
