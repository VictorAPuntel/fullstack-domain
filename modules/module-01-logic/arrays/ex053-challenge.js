// ex053.5 - Find and Display Long Words
// Goal: Ask the user for a sentence, and display all words with more than 5 letters.
// Input: 1 string (a full sentence)
// Process: Split the sentence into words, filter those with length > 5, and display them joined by commas
// Output: Show the words that have more than 5 letters (in a single line, separated by commas)

const prompt = require('prompt-sync')({ sigint: true })

function findDisplayLongWords() {
  let sentence = prompt('Write your sentence: ')
  let words = sentence.trim().split(/\s+/)
  let filtered = words.filter((word) => word.length > 5)
  let joined = filtered.join(', ')
  console.log(`Found ${filtered.length} words: ${joined}`)
}

findDisplayLongWords()
