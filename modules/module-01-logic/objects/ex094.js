// ex094 - Level Up All Heroes
// Goal: Practice using map() to transform an array of objects.
// Input: 1 array containing hero objects with name, class, and level.
// Process:
// 1. Create an array "heroes" with at least 4 objects.
// 2. Use map() to create a new array where each hero’s level is increased by 1.
// 3. Display the new array showing each hero’s name and updated level.
// 4. Display both arrays (original and leveled up) to compare.
// Output: Show the heroes before and after leveling up.

function levelUpHeroes() {
  const heroes = [
    { name: 'Cael Dorn', class: 'Warrior', level: 10 },
    { name: 'Seren Valen', class: 'Mage', level: 12 },
    { name: 'Lira Korr', class: 'Rogue', level: 8 },
    { name: 'Tarin Voss', class: 'Paladin', level: 14 },
  ]

  const levelUpHeroes = heroes.map((hero) => {
    return {
      name: hero.name,
      class: hero.class,
      level: hero.level + 1,
    }
  })
  console.log('--- Before Level Up ---')
  for (const hero of heroes) {
    console.log(`${hero.name} -> ${hero.level}`)
  }
  console.log('--- After Level Up ---')
  for (const hero of levelUpHeroes) {
    console.log(`${hero.name} -> ${hero.level}`)
  }
}

levelUpHeroes()
