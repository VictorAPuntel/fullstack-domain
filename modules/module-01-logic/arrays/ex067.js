// ex067 - Uppercase Strings
// 🎯 Goal: Convert all strings in an array to uppercase.
// 🧠 Input: 1 array of strings
// ⚙️ Process: Analyze the elements and build a new array where all words are in uppercase
// 📤 Output: The transformed array containing only uppercase strings
// 💡 Example: ["a", "Bc"] → ["A", "BC"]

function uppercaseStrings() {
  const words = ['hello', 'world', 'javascript', 'rocks']

  const uppercaseWords = words.map((word) => word.toUpperCase())

  console.log(`Original words: [${words.join(', ')}]`)
  console.log(`Uppercase version: [${uppercaseWords.join(', ')}]`)
}

uppercaseStrings()
