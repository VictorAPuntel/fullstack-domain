// ex027 - Highest and Lowest Number
// Goal: Keep asking the user for numbers until they type 0, then display the highest and lowest numbers entered
// Input: Multiple numbers (stop when the user enters 0)
// Process: Use a loop to read numbers, store the highest and lowest values, and update them each time a new number is entered
// Output: Display the highest and lowest numbers entered

const prompt = require('prompt-sync')({ sigint: true })

function highestLowestNumber() {
  let number = Number(prompt('Write one number: '))

  let highestNumber = number
  let lowestNumber = number

  do {
    number = Number(prompt('Write one number: '))

    if (number !== 0) {
      if (number > highestNumber) highestNumber = number
      if (number < lowestNumber) lowestNumber = number
    }
  } while (number !== 0)

  console.log(`The highest number is ${highestNumber}`)
  console.log(`The lowest number is ${lowestNumber}`)
}

highestLowestNumber()
