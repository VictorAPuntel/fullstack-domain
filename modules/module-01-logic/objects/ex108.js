// ex108 - Top Class by Average Level
// Goal: Find which class has the highest average level.
// Input: Array of heroes with name, class, and level.
// Process:
// 1. Reuse your logic from ex107 to calculate the average level per class.
// 2. From that result, determine which class has the highest average level.
// 3. Return an object like { topClass: 'Paladin', averageLevel: 14 }.
// Output example:
// { topClass: 'Paladin', averageLevel: 14 }

function topClassByAverageLevel(heroes) {
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
  let topClass = ''
  let highestAvg = 0
  for (const [cls, data] of Object.entries(grouped)) {
    const avg = data.totalLevel / data.count
    if (avg > highestAvg) {
      highestAvg = avg
      topClass = cls
    }
  }
  return { topClass, avarageLevel: highestAvg }
}

function testTopClassByAverageLevel() {
  const heroes = [
    { name: 'Cael Dorn', class: 'Warrior', level: 10 },
    { name: 'Seren Valen', class: 'Mage', level: 12 },
    { name: 'Lira Korr', class: 'Rogue', level: 8 },
    { name: 'Tarin Voss', class: 'Paladin', level: 14 },
    { name: 'Nyra Eald', class: 'Archer', level: 9 },
    { name: 'Elyra Vane', class: 'Mage', level: 11 },
  ]

  console.log(topClassByAverageLevel(heroes))
}

testTopClassByAverageLevel()
