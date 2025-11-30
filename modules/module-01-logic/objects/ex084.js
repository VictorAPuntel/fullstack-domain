// ex084 - Object → Array of “key: value” strings
// Goal: Transform a simple object into an array of strings formatted as "key: value".
// Input: 1 object (e.g. { name: 'Alice', age: 25, city: 'Paris' })
// Process: Convert the object into an array where each element is a string "key: value".
// Output: Display the resulting array of strings

function objectToKeyValueArray() {
  const person = {
    name: 'Alice',
    age: 25,
    city: 'Paris',
  }

  const mappedPerson = Object.entries(person).map(
    ([key, value]) => `${key}: ${value}`
  )

  console.log(mappedPerson)
}
