const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const resultContainer = document.getElementById('result-container')
const API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

function createMessage(text, isError = false) {
  resultContainer.innerHTML = ''
  const p = document.createElement('p')
  p.textContent = text
  p.classList.add('message')
  if (isError) {
    p.classList.add('error')
  }
  resultContainer.appendChild(p)
}

function setLoadingState(isLoading) {
  if (isLoading) {
    createMessage('Loading...')
    searchBtn.disabled = true
    searchBtn.textContent = 'Loading'
  } else {
    searchBtn.disabled = false
    searchBtn.textContent = 'Search'
  }
}

function renderPokemon(pokemon) {
  resultContainer.innerHTML = ''

  if (!pokemon) {
    createMessage('No Pokémon data found.', true)
    return
  }

  const card = document.createElement('div')
  card.classList.add('pokemon-card')

  const img = document.createElement('img')
  const pokeImage =
    pokemon.sprites.other['official-artwork'].front_default ||
    pokemon.sprites.front_default

  img.src = pokeImage
  img.alt = pokemon.name

  const main = document.createElement('div')
  main.classList.add('pokemon-main')

  const pokeName = pokemon.name
  const pokeId = pokemon.id

  const nameEl = document.createElement('p')
  nameEl.classList.add('pokemon-name')
  nameEl.textContent = `${pokeName} #${pokeId}`

  const typesEl = document.createElement('p')
  typesEl.classList.add('pokemon-types')
  const typeNames = pokemon.types.map((t) => t.type.name)
  typesEl.textContent = `Types: ${typeNames.join(', ')}`

  const pokeHeight = pokemon.height
  const pokeWeight = pokemon.weight
  const stats = document.createElement('p')
  stats.classList.add('pokemon-stats')
  stats.textContent = `Height: ${pokeHeight} | Weight: ${pokeWeight}`

  main.append(nameEl, typesEl, stats)
  card.append(img, main)
  resultContainer.appendChild(card)
}

// 3) Handle search
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim().toLowerCase()

  if (!query) {
    createMessage('Please type a Pokémon name.')
    return
  }

  setLoadingState(true)

  const url = API_BASE_URL + encodeURIComponent(query)

  fetch(url)
    .then((response) => {
      if (response.status === 404) {
        createMessage('Pokémon not found. Try another one.', true)
        throw new Error('NOT_FOUND')
      }
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then((data) => {
      renderPokemon(data)
    })
    .catch((error) => {
      console.log(error)
      if (error.message !== 'NOT_FOUND') {
        createMessage(
          'Something went wrong while fetching Pokémon. Try again later.',
          true
        )
      }
    })
    .finally(() => {
      setLoadingState(false)
    })
})
