// ex063 - Sum All Values
// 🎯 Goal: Compute the sum of all numbers in an array.
// 🧠 Input: 1 array of numbers
// ⚙️ Process: Use .reduce((acc, n) => acc + n, 0)
// 📤 Output: Single number (the total sum)
// 💡 Example: [5, 5, 10] -> 20

function sumAllValues() {
  const numbers = [5, 10, 15, 20, 25]

  const sumNumbers = numbers.reduce((acc, num) => acc + num, 0)
  console.log(sumNumbers)
}

sumAllValues()
