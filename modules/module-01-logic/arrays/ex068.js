// ex068 - Chain Filter + Map
// 🎯 Goal: Build a new array keeping only the numbers greater than 10 and doubling their values.
// 🧠 Input: 1 array of numbers
// ⚙️ Process: Filter the numbers that meet the condition, then transform them to a new value
// 📤 Output: The resulting array after both transformations
// 💡 Example: [5, 12, 20] → [24, 40]

function chainFilterAndMap() {
  const numbers = [3, 7, 12, 25, 9, 18]

  const filteredNumbers = numbers.filter((num) => num > 10)
  const doubledNumbers = filteredNumbers.map((num) => num * 2)

  console.log(`Original array: [${numbers.join(', ')}]`)
  console.log(`Numbers greater than 10: [${filteredNumbers.join(', ')}]`)
  console.log(
    `Doubled values of filtered numbers: [${doubledNumbers.join(', ')}]`
  )
}

chainFilterAndMap()
