// ex089 - Array of Names → Object with Name Length
// Goal: Transform an array of strings into an object where each key is the name and each value is the length of that name.
// Input: 1 array of names (e.g. ['Alice', 'Bob', 'Charlie'])
// Process: Loop through the array and build an object where name = key and name.length = value
// Output: Display the resulting object

function namesToLengthObject() {
  const names = ['Alice', 'Bob', 'Charlie']
  // const result = {}

  // for (const name of names) {
  //   result[name] = name.length
  // }

  const result = names.reduce((acc, name) => {
    acc[name] = name.length
    return acc
  }, {})
  console.log(result)
}

namesToLengthObject()
