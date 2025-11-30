// ex078 - Filter Words Containing a Letter
// Goal: From an array of words, keep only those that contain a specific letter.
// Input: 1 array of strings and 1 letter (string)
// Process: Use filter() and includes() to find words containing that letter (case-insensitive).
// Output: New array with matching words

function filterWordsByLetter() {
  const words = ['Sun', 'Moon', 'Star', 'Sky', 'Galaxy', 'Wind', 'Fire']
  const letter = 'a'

  const result = words.filter((word) =>
    word.toLowerCase().includes(letter.toLowerCase())
  )

  console.log(result) // Expected output: ['Star', 'Galaxy']
}

filterWordsByLetter()
