// ex103 - Unique Hero Classes
// Goal: Use reduce() to collect all unique hero classes.
// Input: Array of hero objects with "class".
// Process:
// 1. Iterate heroes using reduce().
// 2. Add the class to the array only if it's not already included.
// 3. Return the array of unique classes.
// Output: ["Warrior", "Mage", "Rogue", "Paladin", "Archer"]

function uniqueHeroClasses(heroes) {
  const unique = heroes.reduce((acc, hero) => {
    if (!acc.includes(hero.class)) {
      acc.push(hero.class)
    }
    return acc
  }, [])

  return unique
}

function testUniqueHeroClasses() {
  const heroes = [
    { name: 'Cael Dorn', class: 'Warrior' },
    { name: 'Seren Valen', class: 'Mage' },
    { name: 'Lira Korr', class: 'Rogue' },
    { name: 'Tarin Voss', class: 'Paladin' },
    { name: 'Nyra Eald', class: 'Archer' },
    { name: 'Elyra Vane', class: 'Mage' },
  ]

  console.log(uniqueHeroClasses(heroes))
}

testUniqueHeroClasses()
