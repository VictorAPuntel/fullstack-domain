// ex048 - Combined Array Operations
// Goal: Ask the user for 6 numbers, then:
//  1️⃣ Create a new array with each number squared (using .map())
//  2️⃣ Filter only the even squares (using .filter())
//  3️⃣ Calculate the sum of these even squares (using .reduce())
// Input: 6 numbers
// Process: Apply .map(), .filter(), and .reduce() in sequence
// Output: Display the even squares and their total sum

const prompt = require('prompt-sync')({ sigint: true })

function combinedArrayOperations() {
  let numbers = []

  for (let i = 0; i < 6; i++) {
    let num = Number(prompt('Write one number: '))
    numbers.push(num)
  }

  let squared = numbers.map((num) => num ** 2)
  let evenSquares = squared.filter((num) => num % 2 === 0)
  let sumSquares = evenSquares.reduce((acc, num) => acc + num, 0)

  console.log(`The total sum of squares is ${sumSquares}`)
}

combinedArrayOperations()
