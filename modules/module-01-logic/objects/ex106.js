// ex106 - Highest Level per Class
// Goal: Find the top hero in each class using reduce().
// Input: Array of heroes with name, class, and level.
// Process:
// 1. Group heroes by class using reduce().
// 2. For each class, keep only the hero with the highest level.
// 3. Return an object where each key is a class and each value is the hero’s name.
// Output example:
// { Warrior: 'Cael Dorn', Mage: 'Seren Valen', Rogue: 'Lira Korr', Paladin: 'Tarin Voss', Archer: 'Nyra Eald' }

function highestLevelPerClass(heroes) {
  const grouped = heroes.reduce((acc, hero) => {
    if (!acc[hero.class] || hero.level > acc[hero.class].level) {
      acc[hero.class] = hero
    }
    return acc
  }, {})

  return Object.fromEntries(
    Object.entries(grouped).map(([cls, hero]) => [cls, hero.name])
  )
}

function testHighestLevelPerClass() {
  const heroes = [
    { name: 'Cael Dorn', class: 'Warrior', level: 10 },
    { name: 'Seren Valen', class: 'Mage', level: 12 },
    { name: 'Lira Korr', class: 'Rogue', level: 8 },
    { name: 'Tarin Voss', class: 'Paladin', level: 14 },
    { name: 'Nyra Eald', class: 'Archer', level: 9 },
    { name: 'Elyra Vane', class: 'Mage', level: 11 },
  ]

  console.log(highestLevelPerClass(heroes))
}

testHighestLevelPerClass()
