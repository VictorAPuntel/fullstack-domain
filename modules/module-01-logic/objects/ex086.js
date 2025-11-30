// ex086 - Convert Array of Objects into a Single Object
// Goal: Given an array of objects, build a single object using a chosen key as identifier.
// Input: 1 array of objects (e.g. [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }])
// Process: Use .reduce() or loops to create an object where each key is the 'id' and the value is the full object.
// Output: { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } }

function convertArrayToObject() {
  const people = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 22 },
  ]

  const oneObject = people.reduce((acc, person) => {
    acc[person.id] = person
    return acc
  }, {})

  console.log(oneObject)
}

convertArrayToObject()
