// ex096 - Filter, Transform and Calculate Heroes
// Goal: Combine filter(), map(), and reduce() to process an array of objects.
// Input: 1 array containing hero objects with name, class, and level.
// Process:
// 1. Create an array "heroes" with at least 5 objects.
// 2. Use filter() to get only heroes with level >= 10.
// 3. Use map() to increase the level of the filtered heroes by +2.
// 4. Use reduce() to calculate the total and average level of the new list.
// 5. Display the new list of heroes and their total/average level.
// Output: Show filtered heroes, updated levels, total and average level.

function processHeroes() {
  const heroes = [
    { name: 'Cael Dorn', class: 'Warrior', level: 10 },
    { name: 'Seren Valen', class: 'Mage', level: 12 },
    { name: 'Lira Korr', class: 'Rogue', level: 8 },
    { name: 'Tarin Voss', class: 'Paladin', level: 14 },
    { name: 'Nyra Eald', class: 'Archer', level: 9 },
  ]

  // Step 1: Filter heroes with level >= 10
  const filtered = heroes.filter((hero) => hero.level >= 10)
  // Step 2: Use map() to increase their level by +2
  const levelUp = filtered.map((hero) => {
    return {
      name: hero.name,
      class: hero.class,
      level: hero.level + 2,
    }
  })
  // Step 3: Use reduce() to calculate total level
  const totalLevel = levelUp.reduce((acc, h) => acc + h.level, 0)
  // Step 4: Calculate and display average level
  const avgLevel = totalLevel / levelUp.length
  // Step 5: Display the new heroes list
  console.log('--- Updated Heroes ---')
  for (const hero of levelUp) {
    console.log(`${hero.name} -> ${hero.level}`)
  }
  console.log(`Total Level: ${totalLevel}`)
  console.log(`Average Level: ${avgLevel}`)
}

processHeroes()
