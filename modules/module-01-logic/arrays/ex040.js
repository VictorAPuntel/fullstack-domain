// ex040 - Find a Specific Value in an Array
// Goal: Ask the user for 5 numbers, store them in an array, and then ask for another number to check if it exists in the array.
// Input: 6 numbers (5 for the array, 1 to search for)
// Process: Loop through the array and check if the search number is present
// Output: Display a message saying whether the number was found or not

const prompt = require('prompt-sync')({ sigint: true })

function findSpecificValue() {
  let numbers = []
  let found = false

  for (let i = 0; i < 5; i++) {
    let num = Number(prompt('Write one number: '))
    numbers.push(num)
  }

  let searchNumber = Number(prompt('Which number do you want to search for? '))

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === searchNumber) {
      found = true
      break
    }
  }

  if (found) {
    console.log(`Number ${searchNumber} found in the array!`)
  } else {
    console.log(`Number ${searchNumber} not found in the array.`)
  }
}

findSpecificValue()
