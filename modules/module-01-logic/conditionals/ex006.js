// ex006 - Ask for a number and say if it is greater than 10
// Goal: Read a number and check whether it is greater than 10
// Input: 1 number
// Process: Compare the number with 10
// Output: Display a message according to the result

const prompt = require('prompt-sync')({ sigint: true })

function biggerThan10() {
  const number = Number(prompt('Enter a number: '))

  if (number > 10) {
    console.log('Greater than 10')
  } else {
    console.log('Less than or equal to 10')
  }
}

biggerThan10()
