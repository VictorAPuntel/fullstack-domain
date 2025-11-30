// ex061 - Double Numbers
// 🎯 Goal: Given an array of numbers, return a new array with all values doubled.
// 🧠 Input: 1 array of numbers
// ⚙️ Process: Use .map() to multiply each number by 2
// 📤 Output: New array with doubled values
// 💡 Example: [1, 2, 3] -> [2, 4, 6]

function doubleNumbers() {
  const numbers = [1, 2, 3, 4, 5]

  const doubledNumbers = numbers.map((num) => num * 2)
  console.log(doubledNumbers)
}

doubleNumbers()
