// ex015 - Cash Register
// Goal: Ask the user for the price of several products. After each one, ask if they want to continue.
// Input: Multiple product prices (until the user says "no")
// Process: Use a loop to read the prices, calculate the total and the average
// Output: Display the total amount spent and the average price of all products

const prompt = require('prompt-sync')({ sigint: true })

function cashRegister() {
  let total = 0
  let count = 0
  let continueAnswer

  do {
    const price = Number(prompt('What is the price of this product? '))

    if (isNaN(price) || price < 0) {
      console.log('Invalid input. Please enter a valid positive number.')
      continue
    }

    total += price
    count++

    continueAnswer = prompt(
      'Do you want to add another product? (yes/no): '
    ).toLowerCase()
  } while (continueAnswer === 'yes' || continueAnswer === 'y')

  console.log(`Total amount spent is $${total.toFixed(2)}`)
  console.log(`The average amount spent is $${(total / count).toFixed(2)}`)
}

cashRegister()
