// ex007-challenge - Temperature Classifier
// Goal: Read a temperature and check whether the weather is cold, pleasant, or hot
// Input: 1 number (temperature)
// Process: Compare the temperature with the defined limits
// Output: Display a message according to the result

const prompt = require('prompt-sync')({ sigint: true })

function temperatureClassifier() {
  const temperature = Number(prompt('Enter the temperature: '))

  if (temperature < 15) {
    console.log('It is cold!')
  } else if (temperature >= 15 && temperature <= 30) {
    console.log('The weather is pleasant.')
  } else {
    console.log('It is hot!')
  }
}

temperatureClassifier()
