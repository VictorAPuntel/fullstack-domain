// ex028 - Even and Odd Counter
// Goal: Keep asking the user for numbers until they type 0, then display how many were even and how many were odd
// Input: Multiple numbers (stop when the user enters 0)
// Process: Use a loop to read numbers, check if each is even or odd, and count them separately
// Output: Display the total number of even and odd values entered

const prompt = require('prompt-sync')({ sigint: true })

function evenOddCounter() {
  let even = 0
  let odd = 0
  let number

  do {
    number = Number(prompt('Write one number: '))

    if (number !== 0) {
      if (number % 2 == 0) {
        even += 1
      } else {
        odd += 1
      }
    }
  } while (number !== 0)
  console.log(`The number of even numbers is ${even}`)
  console.log(`The number of odd numbers is ${odd}`)
}

evenOddCounter()
