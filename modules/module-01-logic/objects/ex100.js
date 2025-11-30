// ex100 - Update Hero Level (Immutability)
// Goal: Practice updating objects immutably using map() and spread syntax.
// Input: An array of hero objects with name, class, and level.
// Process:
// 1. Create an array "heroes" with at least 5 objects.
// 2. Write a function that receives the hero's name and the new level.
// 3. Return a **new array** where only the selected hero has the updated level.
// 4. Log both the original and the updated array to confirm immutability.
// Output: Show the updated array and verify that the original array remains unchanged.

function updateHeroLevel(heroes, heroName, newLevel) {
  // Step 1️⃣: Use map() to iterate through each hero in the array.
  // map() returns a NEW array without modifying the original one.
  const updatedHeroes = heroes.map((hero) => {
    // Step 2️⃣: Check if the current hero's name matches the one we want to update.
    if (hero.name === heroName) {
      // Step 3️⃣: Return a NEW object that copies all properties of the hero
      // but updates the "level" property with the new value.
      // The spread operator (...) copies all key–value pairs from the original object.
      return { ...hero, level: newLevel }
    }

    // Step 4️⃣: If the hero is not the one we're updating, return it unchanged.
    return hero
  })

  // Step 5️⃣: Return the new array.
  return updatedHeroes
}

function testUpdateHeroLevel() {
  const heroes = [
    { name: 'Cael Dorn', class: 'Warrior', level: 10 },
    { name: 'Seren Valen', class: 'Mage', level: 12 },
    { name: 'Lira Korr', class: 'Rogue', level: 8 },
    { name: 'Tarin Voss', class: 'Paladin', level: 14 },
    { name: 'Nyra Eald', class: 'Archer', level: 9 },
  ]

  // Step 6️⃣: Call the function to update one specific hero.
  const updated = updateHeroLevel(heroes, 'Lira Korr', 11)

  // Step 7️⃣: Log both arrays to confirm the original one is unchanged.
  console.log('Original:', heroes)
  console.log('Updated:', updated)
}

testUpdateHeroLevel()
