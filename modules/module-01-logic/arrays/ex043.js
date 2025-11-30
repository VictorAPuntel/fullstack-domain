// ex043 - Double All Numbers
// Goal: Ask the user for 5 numbers, store them in an array, and create a new array with all values doubled.
// Input: 5 numbers
// Process: Use the `.map()` method to multiply each element by 2
// Output: Display the new array with doubled values

const prompt = require('prompt-sync')({ sigint: true })

function doubleAllNumbers() {
  let numbers = []

  for (let i = 0; i < 5; i++) {
    let num = Number(prompt('Write one number: '))
    numbers.push(num)
  }

  let double = numbers.map((num) => num * 2)
  console.log(`Doubled numbers: ${double.join(', ')}`)
}

doubleAllNumbers()
