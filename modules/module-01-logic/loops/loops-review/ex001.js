// review01 - Print All Numbers
// Goal: Given an array of numbers, print all of them using a classic for loop.
// Input: 1 array (you can hardcode it for now)
// Process: Use a for loop to access each element by index
// Output: Display each number in the console

function printAllNumbers() {
  let numbers = [5, 10, 15, 20, 25]
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
  }

  /**
   * OR
   * for (let value of numbers) {
   * console.log(value)
   * }
   */
}

printAllNumbers()
