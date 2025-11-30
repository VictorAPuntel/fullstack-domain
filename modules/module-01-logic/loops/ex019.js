// ex019 - Password Validation
// Goal: Ask the user to type a password until it matches "1234". When it's correct, show a success message.
// Input: Password attempts (user types until correct)
// Process: Use a loop to compare each input with the correct password
// Output: Display a success message when the correct password is entered

const prompt = require('prompt-sync')({ sigint: true })

function passwordValidation() {
  const correctPassword = '1234'
  let passwordAttempt

  do {
    passwordAttempt = prompt('Password Attempt: ')
  } while (passwordAttempt !== correctPassword)

  console.log('✅ Success! You entered the correct password.')
}

passwordValidation()
