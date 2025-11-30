// ex018 - Average of Positive Numbers
// Goal: Keep asking the user for numbers until they type 0, then display the average of all positive numbers entered.
// Input: Multiple numbers (stop when the user enters 0)
// Process: Use a loop to read numbers, sum only the positive ones, and count how many were entered
// Output: Display the average of all positive numbers (sum / count)

const prompt = require('prompt-sync')({ sigint: true })

function avaragePositiveNumbers() {
  let count = 0
  let sum = 0
  while (number !== 0) {
    let number = Number(prompt('What number do you want? '))

    if (isNaN(number)) {
      console.log('Invalid input. Please enter a valid number.')
      return
    }

    if (number > 0) {
      sum += number
      count++
    }

    if (count === 0) {
      console.log('No positive numbers were entered.')
      return
    }
  }
  console.log(
    `The avarage of all positives numbers is ${(sum / count).toFixed(2)}`
  )
}

avaragePositiveNumbers()
