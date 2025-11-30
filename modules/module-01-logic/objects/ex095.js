// ex095 - Calculate Total and Average Level
// Goal: Practice using reduce() to calculate total and average values in an array of objects.
// Input: 1 array containing hero objects with name, class, and level.
// Process:
// 1. Create an array "heroes" with at least 4 objects.
// 2. Use reduce() to calculate the total of all heroes' levels.
// 3. Calculate the average level using the total divided by the number of heroes.
// 4. Display the total and average level.
// Output: Show the total and average level of all heroes.

function calculateHeroLevels() {
  const heroes = [
    { name: 'Cael Dorn', class: 'Warrior', level: 10 },
    { name: 'Seren Valen', class: 'Mage', level: 12 },
    { name: 'Lira Korr', class: 'Rogue', level: 8 },
    { name: 'Tarin Voss', class: 'Paladin', level: 14 },
  ]

  const totalLevel = heroes.reduce((acc, h) => acc + h.level, 0)
  const avgLevel = heroes.reduce((acc, h) => acc + h.level, 0) / heroes.length
  console.log('--- Total Level  ---')
  console.log(totalLevel)
  console.log('--- Average Level  ---')
  console.log(avgLevel)
}

calculateHeroLevels()
