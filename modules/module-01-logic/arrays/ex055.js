// ex055 - Replace All Vowels
// Goal: Ask the user for a sentence and replace all vowels with "*"
// Input: 1 string (a full sentence)
// Process: Use `.replace()` with a regex (`/[aeiouAEIOU]/g`) to replace vowels
// Output: Display the modified sentence

const prompt = require('prompt-sync')({ sigint: true })

function replaceAllVowels() {
  let sentence = prompt('Write your sentence: ')
  let replaced = sentence.replace(/[aeiouAEIOU]/g, '*')
  console.log(`Modified sentence: ${replaced}`)
}

replaceAllVowels()
