// ex052 - Count Letters in a Sentence
// Goal: Ask the user for a sentence and count how many letters it contains (ignore spaces).
// Input: 1 string (a full sentence)
// Process: Remove spaces using `.replaceAll(' ', '')` or a regex, then check the length
// Output: Display the total number of letters (excluding spaces)

const prompt = require('prompt-sync')({ sigint: true })

function countLetterSentence() {
  let sentence = prompt('Write your sentence: ')
  let letters = sentence.replaceAll(' ', '')
  /**
   * OR
   * let letters = sentence.replace(/\s+/g, '')
   */
  console.log(`the sentence has ${letters.length} letters.`)
}

countLetterSentence()
