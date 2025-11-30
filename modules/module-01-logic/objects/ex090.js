// ex090 - Update Hero Info
// Goal: Practice updating, adding, and removing properties in an object.
// Input: 1 object containing hero data.
// Process:
// 1. Display the object before any changes.
// 2. Increase the hero’s level by 1.
// 3. Add a new property called "title".
// 4. Remove one property of your choice.
// 5. Add a new item to the equipment array.
// 6. Display the object after all modifications.
// Output: Show the hero object before and after updates.

function updateHeroInfo() {
  const hero = {
    name: 'Cael Dorn',
    class: 'Warrior',
    level: 10,
    equipment: ['Iron Sword', 'Steel Shield'],
  }

  // Step 1: Display the initial object
  console.log(hero)
  // Step 2: Increase the level by 1
  hero.level++
  // Step 3: Add the new property "title"
  hero.title = 'The Iron Bastard'
  // Step 4: Remove one property
  delete hero.class
  // Step 5: Add a new item to the equipment array
  hero.equipment.push('Iron Armor')
  // Step 6: Display the updated object
  console.log(hero)
}

updateHeroInfo()
