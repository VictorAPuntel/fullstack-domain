// ex104 – Unique Hero Names
// Goal: Reinforce the use of includes() inside reduce().
// Input: An array of heroes with name and class.
// Process:
// 1. Iterate through heroes using reduce().
// 2. Add each hero’s name only if it’s not already included in the accumulator.
// 3. Return the array of unique names.
// Output: ["Cael Dorn", "Seren Valen", "Lira Korr", "Tarin Voss", "Nyra Eald", "Elyra Vane"]

function uniqueHeroNames(heroes) {
  const uniqueName = heroes.reduce((acc, hero) => {
    if (!acc.includes(hero.name)) {
      acc.push(hero.name)
    }
    return acc
  }, [])

  return uniqueName
}

function testUniqueHeroNames() {
  const heroes = [
    { name: 'Cael Dorn', class: 'Warrior' },
    { name: 'Seren Valen', class: 'Mage' },
    { name: 'Lira Korr', class: 'Rogue' },
    { name: 'Tarin Voss', class: 'Paladin' },
    { name: 'Nyra Eald', class: 'Archer' },
    { name: 'Elyra Vane', class: 'Mage' },
    { name: 'Cael Dorn', class: 'Warrior' },
  ]

  console.log(uniqueHeroNames(heroes))
}

testUniqueHeroNames()
