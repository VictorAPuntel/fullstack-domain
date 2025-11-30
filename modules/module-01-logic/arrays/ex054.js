// ex054 - Extract Numbers from a Sentence
// Goal: Ask the user for a sentence containing numbers and extract all numbers into an array.
// Input: 1 string (e.g., "I have 2 cats and 3 dogs.")
// Process: Use a regex (`match(/\d+/g)`) to find all numbers and convert them to actual numbers using `.map(Number)`
// Output: Display the array of numbers found in the sentence

const prompt = require('prompt-sync')({ sigint: true })

function extractNumbersSentence() {
  let sentence = prompt('Write your sentence with letters and numbers: ')
  let numbers = sentence.match(/\d+/g)

  if (!numbers) {
    console.log('No numbers found in the sentence.')
    return
  }

  let extracted = numbers.map(Number)
  console.log(`Numbers found: [${extracted.join(', ')}]`)
}

extractNumbersSentence()
