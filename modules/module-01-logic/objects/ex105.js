// ex105 - Sum Levels by Class
// Goal: Combine reduce() and object grouping to calculate total level per class.
// Input: Array of hero objects with class and level.
// Process:
// 1. Use reduce() to group heroes by class.
// 2. Sum the total level of each class.
// Output: { Warrior: 10, Mage: 23, Rogue: 8, Paladin: 14, Archer: 9 }

function sumLevelsByClass(heroes) {
  const heroClass = heroes.reduce((acc, hero) => {
    if (!acc[hero.class]) {
      acc[hero.class] = 0
    }

    if (acc[hero.class]) {
      acc[hero.class] += hero.level
    }

    return acc
  }, {})

  return heroClass
}

function testSumLevelsByClass() {
  const heroes = [
    { name: 'Cael Dorn', class: 'Warrior', level: 10 },
    { name: 'Seren Valen', class: 'Mage', level: 12 },
    { name: 'Lira Korr', class: 'Rogue', level: 8 },
    { name: 'Tarin Voss', class: 'Paladin', level: 14 },
    { name: 'Nyra Eald', class: 'Archer', level: 9 },
    { name: 'Elyra Vane', class: 'Mage', level: 11 },
  ]

  console.log(sumLevelsByClass(heroes))
}

testSumLevelsByClass()
