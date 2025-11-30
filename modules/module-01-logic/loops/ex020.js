// ex020 - Number Skipper
// Goal: Ask the user for a limit number and count from 1 to that number, skipping multiples of 3.
// Input: 1 number (the limit)
// Process: Use a loop to count from 1 to the limit, using "continue" to skip multiples of 3
// Output: Display all numbers from 1 to the limit, except those divisible by 3

const prompt = require('prompt-sync')({ sigint: true })

function numberSkipper() {
  let count = 1
  let finalLoop = Number(prompt('What number is the end of the loop? '))

  if (isNaN(finalLoop) || finalLoop <= 0) {
    console.log('Invalid input. Please enter a positive number.')
    return
  }

  do {
    if (count % 3 === 0) {
      count++
      continue
    }

    console.log(count)
    count++
  } while (count <= finalLoop)
}

numberSkipper()
