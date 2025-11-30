// ex039 - Average of Array Elements
// Goal: Read 5 numbers, store them in an array, calculate the average, and display it.
// Input: 5 numbers
// Process: Sum all array elements and divide by the array length
// Output: Display the average of all elements

const prompt = require('prompt-sync')({ sigint: true })

function averageArrayElements() {
  let numbers = []
  let sum = 0
  for (let i = 0; i < 5; i++) {
    let num = Number(prompt('Write one number: '))
    numbers.push(num)
    sum += num
  }

  console.log(
    `The average of elements of array is ${(sum / numbers.length).toFixed(2)}`
  )
}

averageArrayElements()
