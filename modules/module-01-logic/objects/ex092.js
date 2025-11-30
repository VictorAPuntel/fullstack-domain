// ex092 - Array of Objects
// Goal: Practice accessing and displaying data from an array of objects.
// Input: 1 array containing multiple hero objects.
// Process:
// 1. Create an array "heroes" with at least 3 objects, each containing: name, class, and level.
// 2. Use a loop to display each hero’s name and class.
// 3. Display the average level of all heroes.
// Output: Show each hero and the average level.

function arrayOfObjects() {
  const heroes = [
    { name: 'Cael Dorn', class: 'Warrior', level: 10 },
    { name: 'Seren Valen', class: 'Mage', level: 12 },
    { name: 'Lira Korr', class: 'Rogue', level: 8 },
  ]

  for (const hero of heroes) {
    console.log(`${hero.name} -> ${hero.level}`)
  }

  const avgLevel = heroes.reduce((acc, h) => acc + h.level, 0) / heroes.length
  const avgLevelRounded = Number(avgLevel.toFixed(2))
  console.log(`Average level: ${avgLevelRounded}`)
}

arrayOfObjects()
