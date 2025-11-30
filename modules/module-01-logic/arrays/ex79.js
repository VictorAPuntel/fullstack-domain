// ex079 - Filter Numbers Greater Than Average
// Goal: From an array of numbers, return only those greater than the average value.
// Input: 1 array of numbers
// Process: Calculate the average, then use filter() to keep only numbers above it.
// Output: New array with numbers greater than the average

function filterGreaterThanAverage() {
  const numbers = [10, 20, 30, 40, 50]
  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }

  const average = sum / numbers.length
  const result = numbers.filter((num) => num > average)

  console.log(result) // Expected output: [40, 50]
}

filterGreaterThanAverage()
