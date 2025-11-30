const prompt = require('prompt-sync')({ sigint: true })

function countVowelsSentence() {
  let sentence = prompt('Write your sentence: ')
  let lowerCase = sentence.toLowerCase()
  let vowelsCount = lowerCase.match(/[aeiou]/g)

  if (!vowelsCount) {
    console.log('No vowels found in the sentence.')
    return
  }

  console.log(`The sentence has ${vowelsCount.length} vowels.`)
}

countVowelsSentence()
