// review03 - Print Only Values (for...of)
// Goal: Given an array of numbers, print all values using the for...of loop.
// Input: 1 array (hardcoded)
// Process: Use for...of to access only the values directly
// Output: Display each number in the console

function printOnlyValues() {
  let numbers = [2, 4, 6, 8, 10]
  for (let value of numbers) {
    console.log(value)
  }
}

printOnlyValues()
