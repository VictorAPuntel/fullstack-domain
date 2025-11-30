// ex064 - Find First Greater Than X
// 🎯 Goal: Find the first number greater than a given value X.
// 🧠 Input: 1 array of numbers + X (number)
// ⚙️ Process: Analyze the array and determine which number is the first that satisfies the condition
// 📤 Output: The first number greater than X, or a message if none exists
// 💡 Example: If X = 10 and the array is [3, 5, 8, 12, 20], the result should be 12

function findFirstGreaterThanX() {
  const numbers = [3, 5, 8, 12, 20, 25]
  const X = 10

  const firstHighestValue = numbers.find((num) => num > X)

  if (firstHighestValue !== undefined) {
    console.log(`The first number greater than ${X} is ${firstHighestValue}.`)
  } else {
    console.log(`There is no number greater than ${X} in the array.`)
  }
}

findFirstGreaterThanX()
