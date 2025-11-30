// review02 - Print Index and Value
// Goal: Given an array of numbers, print both the index and its corresponding value.
// Input: 1 array (you can hardcode it)
// Process: Use a for loop to display "Index: X | Value: Y"
// Output: Show all pairs of index and value in the console

function printIndexAndValue() {
  let numbers = [3, 6, 9, 12, 15]
  for (let i = 0; i < numbers.length; i++) {
    console.log(`Index: ${i} | Value: ${numbers[i]}`)
  }
}

printIndexAndValue()
