// ex021 - Interactive Menu
// Goal: Create a simple interactive menu that repeats until the user chooses to exit
// Input: User option (number from the menu)
// Process: Show options, execute the chosen one, repeat until the user types 0
// Output: Messages according to the selected option

const prompt = require('prompt-sync')({ sigint: true })

function interativeMenu() {
  let option

  do {
    console.log('\n=== MENU ===')
    console.log('1 - Say Hello')
    console.log('2 - Show Date')
    console.log('3 - Show a Random Number')
    console.log('0 - Exit')

    option = Number(prompt('Choose an option: '))

    switch (option) {
      case 1:
        console.log('Hello, user!')
        break
      case 2:
        console.log(`Today is: ${new Date().toLocaleDateString()}`)
        break
      case 3:
        console.log(`Random number: ${Math.floor(Math.random() * 100)}`)
        break
      case 0:
        console.log('Exiting the program... 👋')
        break
      default:
        console.log('Invalid option. Try again.')
    }
  } while (option !== 0)
}

interativeMenu()
