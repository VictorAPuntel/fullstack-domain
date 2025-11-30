// ex102 - Hero Lineup String
// Goal: Practice using reduce() to concatenate strings.
// Input: An array of active heroes.
// Process:
// 1. Filter only active heroes.
// 2. Use reduce() to build a string with all their names separated by commas.
// 3. Return the final string ending with a period.
// Output: "Active heroes: Cael Dorn, Seren Valen, Tarin Voss, Nyra Eald."

function heroLineup(heroes) {
  const filteredHeroes = heroes
    .filter((hero) => hero.active)
    .reduce((acc, hero, index, array) => {
      // add comma between names, but not after the last one
      const separator = index === array.length - 1 ? '' : ', '
      return acc + hero.name + separator
    }, 'Active heroes: ')

  return filteredHeroes + '.'
}

function testHeroLineup() {
  const heroes = [
    { name: 'Cael Dorn', active: true },
    { name: 'Seren Valen', active: true },
    { name: 'Lira Korr', active: false },
    { name: 'Tarin Voss', active: true },
    { name: 'Nyra Eald', active: true },
  ]

  console.log(heroLineup(heroes))
}

testHeroLineup()
