// ex004 - Name and Age: print “Hello, [name]! You are [age] years old.”
// Goal: Read the user's name and age, then display a message with that information
// Input: Name and age
// Process: Read the user's input
// Output: Display a message showing the user's name and age

const prompt = require('prompt-sync')({ sigint: true })

function nameAndAge() {
  const name = prompt('Enter your name: ')
  const age = Number(prompt('Enter your age: '))

  console.log(`Hello, ${name}! You are ${age} years old.`)
}

nameAndAge()
