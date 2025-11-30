// ex083 - Access Object Properties
// Goal: Practice accessing keys and values from an object, including arrays and nested structures.
// Input: 1 object (e.g. player data)
// Process: Access specific keys, array elements, and nested object values.
// Output: Display requested values using console.log().

function accessObjectProperties() {
  const hero = {
    name: 'Cael Dorn',
    title: 'The Steel Bastard',
    level: 10,
    equipment: ['Sword', 'Armor', 'Ring'],
    stats: {
      strength: 18,
      dexterity: 12,
      vitality: 16,
    },
  }

  // Step 2: Access and display the following:
  // - Hero name
  console.log(hero.name)
  // - First item in the equipment array
  console.log(hero.equipment[0])
  // - Strength value
  console.log(hero.stats.strength)
  // - All keys of the hero object
  console.log(Object.keys(hero))
  // - All values of the hero object
  console.log(Object.values(hero))
}

accessObjectProperties()
