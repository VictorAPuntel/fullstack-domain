// ex030 - Summary Statistics
// Goal: Keep asking the user for numbers until they type 0, then display summary statistics
// Input: Multiple numbers (stop when the user enters 0)
// Process: Read each number and track the total sum, count, average, highest and lowest values
// Output: Display the total count, sum, average, highest and lowest numbers entered

const prompt = require('prompt-sync')({ sigint: true })

function summaryStatistics() {
  let number = Number(prompt('Write one number: '))
  let highestNumber = number
  let lowestNumber = number
  let count = 0
  let sum = 0

  do {
    number = Number(prompt('Write one number: '))

    if (number !== 0) {
      if (number > highestNumber) {
        highestNumber = number
      } else if (number < lowestNumber) {
        lowestNumber = number
      }
      sum += number
      count++
    }
  } while (number !== 0)

  console.log(`The number of numbers counted is ${count}`)
  console.log(`The sum of total numbers is ${sum}`)
  console.log(`The average of total numbers is ${(sum / count).toFixed(2)}`)
  console.log(`The highest number is ${highestNumber}`)
  console.log(`The lowest number is ${lowestNumber}`)
}

summaryStatistics()
