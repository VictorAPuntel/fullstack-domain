// ex058 - Reverse Letters of Each Word
// Goal: Ask the user for a sentence and display it with each word spelled backward, but keeping the word order.
// Input: 1 string (a full sentence)
// Process: Split the sentence into words, reverse each word individually, and join them back into a sentence
// Output: Display the sentence with each word reversed

const prompt = require('prompt-sync')({ sigint: true })

function reverseLettersEachWord() {
  let sentence = prompt('Write your sentence: ')
  let words = sentence.trim().split(/\s+/)
  let reversedWord = words.map((word) => word.split('').reverse().join(' '))
  let reversedSentence = reversedWord.join(' ')
  console.log(reversedSentence)
}

reverseLettersEachWord()
