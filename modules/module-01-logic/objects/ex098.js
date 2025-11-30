// ex098 - Group Heroes by Class
// Goal: Practice grouping objects by a specific property using reduce().
// Input: 1 array containing hero objects with name, class, and level.
// Process:
// 1. Create an array "heroes" with at least 6 objects (some sharing the same class).
// 2. Use reduce() to group heroes by their "class" property.
// 3. Each key in the resulting object should represent a class, with an array of heroes as its value.
// 4. Display each class followed by the list of hero names belonging to it.
// Output: Show heroes grouped by class.

function groupHeroesByClass() {
  const heroes = [
    { name: 'Cael Dorn', class: 'Warrior', level: 10 },
    { name: 'Seren Valen', class: 'Mage', level: 12 },
    { name: 'Lira Korr', class: 'Rogue', level: 8 },
    { name: 'Tarin Voss', class: 'Paladin', level: 14 },
    { name: 'Nyra Eald', class: 'Archer', level: 9 },
    { name: 'Elyra Vane', class: 'Mage', level: 11 },
  ]

  const grouped = heroes.reduce((acc, hero) => {
    if (!acc[hero.class]) {
      acc[hero.class] = []
    }
    acc[hero.class].push(hero.name)
    return acc
  }, {})

  console.log(grouped)
}

groupHeroesByClass()
