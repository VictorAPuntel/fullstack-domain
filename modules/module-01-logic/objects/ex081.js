// ex081 - Nested Objects & Arrays
// Goal: Practice accessing data inside nested objects and arrays.
// Input: 1 object containing nested arrays and objects (e.g. player inventory)
// Process: Access values from multiple levels of nesting.
// Output: Display specific values using console.log().

function accessNestedData() {
  const game = {
    player: {
      name: 'Cael Dorn',
      class: 'Warrior',
      level: 10,
      inventory: [
        { name: 'Iron Sword', damage: 10 },
        { name: 'Steel Armor', defense: 20 },
        { name: 'Healing Potion', restore: 50 },
      ],
      stats: {
        strength: 18,
        vitality: 16,
        dexterity: 12,
      },
    },
  }

  //Access and display the following:
  // - Player name
  console.log(`Player Name: ${game.player.name}`)
  // - Player class
  console.log(`Player class: ${game.player.class}`)
  // - Name of the second item in the inventory
  console.log(`Second item in invetory: ${game.player.inventory[1].name}`)
  // - Defense value of the Steel Armor
  console.log(`Defense Value: ${game.player.inventory[1].defense}`)
  // - Strength value from stats
  console.log(`Strength value: ${game.player.stats.strength}`)
  // - Restore value of the Healing Potion
  console.log(`Restore Value: ${game.player.inventory[2].restore}`)
}

accessNestedData()
