// ex035 - Reverse an Array
// Goal: Read 5 numbers, store them in an array, and display them in reverse order.
// Input: 5 numbers
// Process: Use a loop to read numbers and another to display them backwards
// Output: Display all numbers in reverse order

const prompt = require('prompt-sync')({ sigint: true })

function reverseArray() {
  let numbers = []

  for (let i = 0; i < 5; i++) {
    let num = Number(prompt('Write one number: '))
    numbers.push(num)
  }

  for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i])
  }

  let numbers2 = []

  for (let i = 0; i < 5; i++) {
    let num = Number(prompt('Write one number: '))
    numbers2.push(num)
  }

  const reversed = numbers2.reverse()

  for (let i = 0; i < reversed.length; i++) {
    console.log(reversed[i])
  }
}

reverseArray()
