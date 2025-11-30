// ex038 - Sum of First and Last Elements
// Goal: Read 5 numbers, store them in an array, and display the sum of the first and last elements.
// Input: 5 numbers
// Process: Access the first and last elements and add them together
// Output: Display the sum of the first and last elements

const prompt = require('prompt-sync')({ sigint: true })

function sumFirstLastElement() {
  let numbers = []
  let sum = 0
  for (let i = 0; i < 5; i++) {
    let num = Number(prompt('Write one number: '))
    numbers.push(num)
  }

  sum = numbers[0] + numbers[numbers.length - 1]
  console.log(`The sum of the first and last element is ${sum}`)
}

sumFirstLastElement()
