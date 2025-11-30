// ex093 - Filter Heroes by Level
// Goal: Practice filtering an array of objects based on a condition.
// Input: 1 array containing hero objects with name, class, and level.
// Process:
// 1. Create an array "heroes" with at least 4 objects.
// 2. Use filter() to create a new array containing only heroes with level >= 10.
// 3. Display the filtered heroes (name and level).
// 4. Display how many heroes met the condition.
// Output: Show the list of heroes with level >= 10 and the total count.

function filterHeroesByLevel() {
  const heroes = [
    { name: 'Cael Dorn', class: 'Warrior', level: 10 },
    { name: 'Seren Valen', class: 'Mage', level: 12 },
    { name: 'Lira Korr', class: 'Rogue', level: 8 },
    { name: 'Tarin Voss', class: 'Paladin', level: 14 },
  ]

  const filtered = heroes.filter((heroe) => heroe.level >= 10)
  for (const heroe of filtered) {
    console.log(`${heroe.name} -> ${heroe.level}`)
  }
  console.log(`Total heroes with level >= 10: ${filtered.length}`)
}

filterHeroesByLevel()
