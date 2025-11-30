// ex077 - Filter Short Words and Uppercase Them
// Goal: From an array of words, keep only those with 4 or fewer letters and convert them to uppercase.
// Input: 1 array of strings
// Process: Use filter() to keep words with length <= 4, then map() to uppercase.
// Output: New array with short words in uppercase

function filterAndUppercaseShortWords() {
  const words = ['sun', 'moon', 'star', 'sky', 'galaxy', 'wind', 'fire']

  const result = words
    .filter((word) => word.length <= 4)
    .map((word) => word.toUpperCase())

  console.log(result) // Expected output: ['SUN', 'MOON', 'SKY', 'WIND', 'FIRE']
}

filterAndUppercaseShortWords()
