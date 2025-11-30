// ex009 - Check which number is greater or if they are equal
// Goal: Ask for 2 numbers and check which one is greater or if they are equal
// Input: 2 numbers
// Process: Compare the two numbers to determine which is greater or if they are equal
// Output: Display a message according to the result

const prompt = require('prompt-sync')({ sigint: true })

function whatIsTheBiggestOrEqual() {
  const n1 = Number(prompt('Enter the 1st number: '))
  const n2 = Number(prompt('Enter the 2nd number: '))

  if (n1 > n2) {
    console.log(`${n1} = n1 is greater`)
  } else if (n1 < n2) {
    console.log(`${n2} = n2 is greater`)
  } else {
    console.log('They are equal')
  }
}

whatIsTheBiggestOrEqual()

function whatIsTheBiggestOrEqualVariation() {
  const n1 = Number(prompt('Enter the 1st number: '))
  const n2 = Number(prompt('Enter the 2nd number: '))

  if (isNaN(n1) || isNaN(n2)) {
    console.log('Please enter valid numbers')
    return
  }

  if (n1 === n2) {
    console.log('They are equal')
  } else if (n1 > n2) {
    console.log(`${n1} = n1 is greater`)
  } else {
    console.log(`${n2} = n2 is greater`)
  }
}

whatIsTheBiggestOrEqualVariation()
