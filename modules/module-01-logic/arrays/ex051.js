// ex051 - Count Words in a Sentence
// Goal: Ask the user for a sentence and display how many words it contains.
// Input: 1 string (a full sentence)
// Process: Split the sentence into an array of words using `.split(' ')` and count the elements
// Output: Display the total number of words

const prompt = require('prompt-sync')({ sigint: true })

function countWordsSentence() {
  let sentence = prompt('Write a sentence: ')
  let words = sentence.trim().split(/\s+/)

  console.log(`This sentence contains ${words.length} word(s).`)
}

countWordsSentence()
