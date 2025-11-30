// ex037 - First and Last Elements
// Goal: Read 5 numbers, store them in an array, and display the first and the last elements.
// Input: 5 numbers
// Process: Access the first element (index 0) and the last element (index length - 1)
// Output: Display both the first and last elements

const prompt = require('prompt-sync')({ sigint: true })

function firstLatsElements() {
  let numbers = []
  let firsElement = 0
  let lastElement = 0
  for (let i = 0; i < 5; i++) {
    let num = Number(prompt('Write one number: '))
    numbers.push(num)
  }

  firsElement = numbers[0]
  lastElement = numbers[numbers.length - 1]
  console.log(`The first element of array is ${firsElement}`)
  console.log(`The last element of array is ${lastElement}`)
}

firstLatsElements()
