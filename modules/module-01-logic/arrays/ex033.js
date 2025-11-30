// ex033 - Count Even and Odd Numbers
// Goal: Read 6 numbers, count how many are even and how many are odd, and display the results.
// Input: 6 numbers
// Process: Loop through the array, check if each number is even or odd, and increment counters
// Output: Display the total count of even and odd numbers

const prompt = require('prompt-sync')({ sigint: true })

function countEvenOddNumbers() {
  let numbers = []
  let evenCount = 0
  let oddCount = 0

  for (let i = 0; i < 6; i++) {
    let num = Number(prompt('Write one number: '))
    numbers.push(num)
    if (numbers[i] % 2 === 0) {
      evenCount++
    } else {
      oddCount++
    }
  }
  console.log(`The even count is ${evenCount}`)
  console.log(`The odd count is ${oddCount}`)
}

countEvenOddNumbers()
