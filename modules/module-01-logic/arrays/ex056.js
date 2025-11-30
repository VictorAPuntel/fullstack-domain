// ex056 - Count Specific Letter
// Goal: Ask the user for a sentence and a letter, then count how many times that letter appears.
// Input: 1 sentence + 1 letter
// Process: Split the sentence into characters (using `.split('')`), filter those equal to the chosen letter, and count them
// Output: Display how many times the letter appears in the sentence

const prompt = require('prompt-sync')({ sigint: true })

function countSpecificLetter() {
  let sentence = prompt('Write your sentence: ')
  let letter = prompt('Choose your letter: ')
  let characters = sentence.trim().split('')
  let filtered = characters.filter((character) => character === letter)
  console.log(`The letter "${letter}" appears ${filtered.length} times.`)
}

countSpecificLetter()