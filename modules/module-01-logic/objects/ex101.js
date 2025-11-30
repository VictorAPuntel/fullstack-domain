// ex101 - Average Level of Active Heroes
// Goal: Practice filter(), map() and reduce() to calculate an average.
// Input: An array of heroes with name, level, and active status.
// Process:
// 1. Filter only active heroes (active === true).
// 2. Extract only their levels.
// 3. Use reduce() to calculate the average level.
// 4. Display the result rounded to 2 decimals.
// Output: "Average Level of Active Heroes: X.XX"

function averageActiveHeroes(heroes) {
  // Step 1️⃣: filter active heroes
  const active = heroes.filter((hero) => hero.active)

  // Step 2️⃣: map levels
  const levels = active.map((hero) => hero.level)

  // Step 3️⃣: sum all levels
  const total = levels.reduce((acc, level) => acc + level, 0)

  // Step 4️⃣: calculate and round average
  const average = (total / levels.length).toFixed(2)

  return average
}

function testAverageActiveHeroes() {
  const heroes = [
    { name: 'Cael Dorn', class: 'Warrior', level: 10, active: true },
    { name: 'Seren Valen', class: 'Mage', level: 12, active: true },
    { name: 'Lira Korr', class: 'Rogue', level: 8, active: false },
    { name: 'Tarin Voss', class: 'Paladin', level: 14, active: true },
    { name: 'Nyra Eald', class: 'Archer', level: 9, active: true },
  ]

  const avg = averageActiveHeroes(heroes)
  console.log(`Average Level of Active Heroes: ${avg}`)
}

testAverageActiveHeroes()
