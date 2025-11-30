// ex107 - Average Level per Class
// Goal: Calculate the average hero level for each class.
// Input: Array of heroes with name, class, and level.
// Process:
// 1. Group heroes by class using reduce().
// 2. For each class, accumulate total levels and count heroes.
// 3. After reduction, compute the average level for each class.
// 4. Return an object where each key is a class and each value is the average level.
// Output example:
// { Warrior: 10, Mage: 11.5, Rogue: 8, Paladin: 14, Archer: 9 }

function averageLevelPerClass(heroes) {
  const grouped = heroes.reduce((acc, hero) => {
    if (!acc[hero.class]) {
      acc[hero.class] = {
        totalLevel: hero.level,
        count: 1,
      }
    } else if (acc[hero.class]) {
      acc[hero.class].totalLevel += hero.level
      acc[hero.class].count++
    }

    return acc
  }, {})

  return Object.fromEntries(
    Object.entries(grouped).map(([cls, data]) => [
      cls,
      data.totalLevel / data.count,
    ])
  )
}

function testAverageLevelPerClass() {
  const heroes = [
    { name: 'Cael Dorn', class: 'Warrior', level: 10 },
    { name: 'Seren Valen', class: 'Mage', level: 12 },
    { name: 'Lira Korr', class: 'Rogue', level: 8 },
    { name: 'Tarin Voss', class: 'Paladin', level: 14 },
    { name: 'Nyra Eald', class: 'Archer', level: 9 },
    { name: 'Elyra Vane', class: 'Mage', level: 11 },
  ]

  console.log(averageLevelPerClass(heroes))
}

testAverageLevelPerClass()
