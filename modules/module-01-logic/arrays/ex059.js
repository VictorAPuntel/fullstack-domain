// ex059 - Convert Sentence to Title Case
// Goal: Ask the user for a sentence and display it with each word capitalized (first letter uppercase, the rest lowercase).
// Input: 1 string (a full sentence)
// Process: Split the sentence into words, transform each word, and join them back
// Output: Display the sentence in Title Case

const prompt = require('prompt-sync')({ sigint: true })

function convertToTitleCase() {
  let sentence = prompt('Write your sentence: ')
  let words = sentence.trim().split(/\s+/)

  let capitalizedWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
  )
  let newSentence = capitalizedWords.join(' ')
  console.log(newSentence)
}

convertToTitleCase()
