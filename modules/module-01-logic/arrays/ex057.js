// ex057 - Reverse Words in a Sentence
// Goal: Ask the user for a sentence and display it with the words in reverse order.
// Input: 1 string (a full sentence)
// Process: Split the sentence into words, reverse the array, and join it back into a string
// Output: Display the sentence with reversed word order

const prompt = require('prompt-sync')({ sigint: true })

function reverseWordsSentence() {
  let sentence = prompt('Write your sentence: ')

  let words = sentence.trim().split(/\s+/)
  let reversedWords = words.reverse()
  let reversedSentence = reversedWords.join(' ')

  console.log(reversedSentence)
}

reverseWordsSentence()
