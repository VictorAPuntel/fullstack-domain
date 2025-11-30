// ex010 - Ask for a person's age and say if they are an adult (≥18) or a minor (<18)
// Goal: Ask for the age and check whether it is greater than or equal to 18, or less
// Input: 1 number (age)
// Process: Check the age according to the conditions
// Output: Display a message according to the result

const prompt = require('prompt-sync')({ sigint: true })

function greaterOrLessThan18() {
  const age = Number(prompt('Enter your age: '))
  const yearsTo18 = 18 - age

  if (isNaN(age) || age < 0) {
    console.log('Invalid age! Please enter a positive number.')
    return
  }

  if (age >= 18) {
    console.log('Adult')
  } else {
    console.log(`Minor — ${yearsTo18} year(s) left to reach 18.`)
  }
}

greaterOrLessThan18()
