// review06 - Count Object Properties
// Goal: Given an object, count how many properties (keys) it has.
// Input: 1 object (hardcoded)
// Process: Use a loop or Object.keys() to count the number of keys
// Output: Display the total count of properties

function countObjectProperties() {
  let book = {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: 310,
    genre: 'Fantasy',
  }
  let keyCount = 0
  for (const key in book) {
    if (book.hasOwnProperty(key)) {
      keyCount++
    }
  }
  console.log('Number of keys:', keyCount)
}

countObjectProperties()
