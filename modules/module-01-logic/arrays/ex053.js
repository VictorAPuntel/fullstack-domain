// ex053 - Count Words with More Than 5 Letters
// Goal: Ask the user for a sentence and count how many words have more than 5 letters.
// Input: 1 string (a full sentence)
// Process: Split the sentence into words using `.split(' ')`, filter those with length > 5, and count them
// Output: Display how many words have more than 5 letters

const prompt = require('prompt-sync')({ sigint: true })

function countWordsMoreFiveletters() {
  let sentence = prompt('Write your sentence: ')
  let words = sentence.trim().split(/\s+/)
  let filtered = words.filter((word) => word.length > 5)
  console.log(`There are ${filtered.length} word(s) with more than 5 letters.`)
}

countWordsMoreFiveletters()
