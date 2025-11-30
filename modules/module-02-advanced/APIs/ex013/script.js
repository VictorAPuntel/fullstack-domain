const searchInput = document.getElementById('pokemon-input')
const btn = document.getElementById('search-btn')
const pokemonBox = document.getElementById('pokemon-card')
const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

btn.addEventListener('click', () => {
  pokemonBox.innerHTML = '<p>Loading...</p>'
  const pokeName = searchInput.value.trim().toLowerCase()
  if (!pokeName) {
    pokemonBox.innerHTML =
      '<p>We couldnt find the name, check if it was spelled correctly</p>'
    return
  }
  const newURL = API_URL + pokeName
  fetch(newURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something Went Wrong')
      }
      return response.json()
    })
    .then((pokemon) => {
      pokemonBox.innerHTML = ''
      const name = pokemon.name
      const sprite = pokemon.sprites.front_default
      const pokeHeight = pokemon.height
      const pokeWeight = pokemon.weight

      const ul = document.createElement('ul')
      ul.classList.add('types')
      pokemon.types.forEach((t) => {
        const li = document.createElement('li')
        li.textContent = t.type.name.toUpperCase()
        ul.appendChild(li)
      })

      const div = document.createElement('div')
      div.classList.add('card')

      const img = document.createElement('img')
      img.src = sprite

      const nameP = document.createElement('p')
      nameP.textContent = `Name: ${name}`

      const height = document.createElement('p')
      height.textContent = `Height: ${pokeHeight}`

      const weight = document.createElement('p')
      weight.textContent = `Weight: ${pokeWeight}`

      div.append(img, ul, nameP, height, weight)
      pokemonBox.appendChild(div)
    })

    .catch((error) => {
      console.log(error)
      pokemonBox.innerHTML = '<p>Server out, try again</p>'
    })
})
