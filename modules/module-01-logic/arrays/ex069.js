// ex069 - Transform Array → Object
// 🎯 Goal: Transform an array of names into an object where each key is the name and the value is its length.
// 🧠 Input: 1 array of strings (names)
// ⚙️ Process: Analyze the array and build a new object where each name becomes a property and its length is the value
// 📤 Output: An object showing each name and its corresponding length
// 💡 Example: ["Ana", "Bruno"] → { Ana: 3, Bruno: 5 }

function transformArrayToObject() {
  const names = ['Alice', 'Bob', 'Charlie', 'Diana']
  let result = names.reduce(
    (result, value) => ({ ...result, [value]: value.length }),
    {}
  )
  console.log(result)
}

transformArrayToObject()
