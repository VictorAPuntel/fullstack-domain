// ex099 - Hero Dashboard
// Goal: Combine everything learned about arrays and objects to create a structured report.
// Input: 1 array containing hero objects with name, class, and level.
// Process:
// 1. Filter only heroes with level >= 10.
// 2. Group heroes by their "class" property.
// 3. Sort each group in descending order of level.
// 4. Display the result in a clean, readable format.
// Output: Heroes grouped and sorted, shown in the console.

function heroDashboard() {
  const heroes = [
    { name: 'Cael Dorn', class: 'Warrior', level: 10 },
    { name: 'Seren Valen', class: 'Mage', level: 12 },
    { name: 'Lira Korr', class: 'Rogue', level: 8 },
    { name: 'Tarin Voss', class: 'Paladin', level: 14 },
    { name: 'Nyra Eald', class: 'Archer', level: 9 },
    { name: 'Elyra Vane', class: 'Mage', level: 11 },
  ]

  // Step 1: Filter heroes with level >= 10
  // Step 2: Group filtered heroes by class
  // Step 3: Sort each group by level (descending)
  // Step 4: Display each class and its heroes

  const filteredHeroes = heroes
    .filter((hero) => hero.level >= 10)
    .sort((a, b) => b.level - a.level)
    .reduce((acc, hero) => {
      if (!acc[hero.class]) acc[hero.class] = []
      acc[hero.class].push(hero.name)
      return acc
    }, {})

  for (const heroClass in filteredHeroes) {
    console.log(`Class: ${heroClass}`)
    filteredHeroes[heroClass].forEach((name) => console.log(` - ${name}`))
    console.log('')
  }

  console.log(filteredHeroes)
}

heroDashboard()
