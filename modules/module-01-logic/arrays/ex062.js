// ex062 - Filter Even Numbers
// 🎯 Goal: From an array, create a new one with only even numbers.
// 🧠 Input: 1 array of numbers
// ⚙️ Process: Use .filter() checking n % 2 === 0
// 📤 Output: New array with only even values
// 💡 Example: [1, 2, 3, 4, 5] -> [2, 4]

function filterEvenNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

  const filteredNumbers = numbers.filter((num) => num % 2 === 0)
  console.log(filteredNumbers)
}

filterEvenNumbers()
