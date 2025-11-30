// ex085 - Array of Phrases → Word Frequency Report
// Goal: Given an array of phrases, count how many times each word appears across all phrases.
// Input: 1 array of strings (e.g. ["I love code", "code is fun"])
// Process: Split each phrase into words, and count occurrences in an object.
// Output: Display an object with word frequencies (e.g. { I: 1, love: 1, code: 2, is: 1, fun: 1 })

function wordFrequencyReport() {
  const phrases = ['I love code', 'Code is fun', 'I love learning code']
  const words = phrases.flatMap((phrase) =>
    phrase.split(' ').map((word) => word.toLowerCase())
  )
  const frequency = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1
    return acc
  }, {})
  console.log(frequency)
}
