// ex097 - Hero Ranking System
// Goal: Practice sorting and ranking heroes based on their levels.
// Input: 1 array containing hero objects with name, class, and level.
// Process:
// 1. Create an array "heroes" with at least 5 objects.
// 2. Sort the array in descending order (highest level first).
// 3. Assign a "rank" to each hero based on their position in the sorted list.
// 4. Display the ranked heroes (Rank - Name - Level).
// Output: Show the heroes in ranking order.

function heroRankingSystem() {
  const heroes = [
    { name: 'Cael Dorn', class: 'Warrior', level: 10 },
    { name: 'Seren Valen', class: 'Mage', level: 12 },
    { name: 'Lira Korr', class: 'Rogue', level: 8 },
    { name: 'Tarin Voss', class: 'Paladin', level: 14 },
    { name: 'Nyra Eald', class: 'Archer', level: 9 },
  ]

  // Step 1: Sort heroes by level (descending)
  const sortingHeroes = heroes.sort((a, b) => b.level - a.level)
  // Step 2: Assign rank property based on sorted order
  const addingRank = sortingHeroes.map((hero, index) => {
    return {
      name: hero.name,
      class: hero.class,
      level: hero.level,
      rank: index + 1,
    }
  })
  // Step 3: Display heroes in ranking order
  for (const hero of addingRank) {
    console.log(
      `Rank ${hero.rank}: ${hero.name} (${hero.class}) - Level ${hero.level}`
    )
  }
}

heroRankingSystem()
