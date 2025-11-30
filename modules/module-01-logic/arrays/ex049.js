// ex049 - Search for a Name
// Goal: Ask the user to enter 5 names, store them in an array, and then ask for another name to check if it exists.
// Input: 6 strings (5 for the array, 1 to search for)
// Process: Use array methods like `.includes()` to check for the name
// Output: Display a message saying whether the name was found or not

const prompt = require('prompt-sync')({ sigint: true })

function searchName() {
  let names = []

  for (let i = 0; i < 5; i++) {
    let name = prompt('Write one name: ')
    names.push(name)
  }

  let searchName = prompt('What name do you want to search? ')

  if (names.map((n) => n.toLowerCase()).includes(searchName.toLowerCase())) {
    console.log(`✅ The name "${searchName}" was found in the list.`)
  } else {
    console.log(`❌ The name "${searchName}" was not found.`)
  }
}

searchName()
