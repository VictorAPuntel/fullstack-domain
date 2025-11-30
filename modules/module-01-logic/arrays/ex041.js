// ex041 - Count Occurrences of a Value
// Goal: Ask the user for 6 numbers, store them in an array, and then ask for another number to check how many times it appears.
// Input: 7 numbers (6 for the array, 1 to count occurrences)
// Process: Loop through the array and count how many times the search number appears
// Output: Display how many times the number appears in the array

const prompt = require('prompt-sync')({ sigint: true })

function countOccurrencesValues() {
  let numbers = []
  let count = 0
  for (let i = 0; i < 6; i++) {
    let num = Number(prompt('Write one number: '))
    numbers.push(num)
  }

  let searchNumber = Number(prompt('Which number do you want to search for? '))

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === searchNumber) {
      count += 1
    }
  }

  console.log(
    `The number ${searchNumber} appears ${count} time(s) in the array.`
  )
}

countOccurrencesValues()
