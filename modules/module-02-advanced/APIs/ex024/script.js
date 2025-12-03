// ex024 - SWAPI Characters

// 1) Get elements
const input = document.getElementById('search-input')
const btn = document.getElementById('search-btn')
const results = document.getElementById('results')

// 2) Base URL
const API_URL = 'https://swapi.dev/api/people'

// Helper to show messages
// function showMessage(text, isError = false) { ... }
function showMessage(text, isError = false) {
  results.innerHTML = ''
  const p = document.createElement('p')
  p.textContent = text
  p.classList.add('message')
  if (isError) {
    p.classList.add('error')
  }
  results.appendChild(p)
}
// Helper to set loading state
// function setLoadingState(isLoading) { ... }
function setLoadingState(isLoading) {
  if (isLoading) {
    showMessage('Loading...')
    btn.disabled = true
    btn.textContent = 'Loading'
  } else {
    btn.disabled = false
    btn.textContent = 'Search Characters'
  }
}

// Function to render characters
// function renderCharacters(list) {
//   TODO:
//     - Clear results
//     - If list empty: showMessage("No characters found")
//     - Create grid container
//     - For each character:
//           * Create card
//           * Fill name, height, gender, birth_year
//           * Show homeworld (URL only, or fetch planet for extra challenge)
//     - Append grid to results
// }

function fetchWorld(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Homeworld request failed')
      }
      return response.json()
    })
    .catch((error) => {
      console.log(error)
      return null
    })
}

function fetchFilm(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Films request failed')
      }
      return response.json()
    })
    .catch((error) => {
      console.log(error)
      return null
    })
}

function renderCharacters(list) {
  results.innerHTML = ''

  if (list.length === 0) {
    showMessage('No characters found!')
    return
  }

  const grid = document.createElement('div')
  grid.classList.add('characters-grid')

  list.forEach((char) => {
    const card = document.createElement('div')
    card.classList.add('char-card')

    const charName = char.name
    const name = document.createElement('p')
    name.classList.add('char-name')
    name.textContent = charName

    const charHeight = char.height
    const spanHeight = document.createElement('span')
    spanHeight.textContent = `Height: ${charHeight}`

    const charGender = char.gender
    const spanGender = document.createElement('span')
    spanGender.textContent = `Gender: ${charGender}`

    const charBD = char.birth_year
    const spanBD = document.createElement('span')
    spanBD.textContent = `Birthday: ${charBD}`

    const spanHome = document.createElement('span')
    spanHome.textContent = 'Homeworld: Loading...'

    fetchWorld(char.homeworld).then((planet) => {
      if (planet) {
        spanHome.textContent = `Homeworld: ${planet.name}`
      } else {
        spanHome.textContent = 'Homeworld: Unknown'
      }
    })

    const filmsGrid = document.createElement('div')
    filmsGrid.classList.add('films')

    const filmsTitle = document.createElement('h3')
    filmsTitle.textContent = 'Films'
    filmsGrid.appendChild(filmsTitle)

    const filmsList = document.createElement('ul')
    filmsGrid.appendChild(filmsList)

    const filmPromises = char.films.map((filmUrl) => fetchFilm(filmUrl))

    Promise.all(filmPromises).then((films) => {
      films.forEach((film) => {
        if (!film) return

        const li = document.createElement('li')
        li.textContent = film.title
        filmsList.appendChild(li)
      })
    })

    const charInfo = document.createElement('p')
    charInfo.classList.add('char-info')

    charInfo.append(spanHeight, spanGender, spanBD, spanHome, filmsGrid)
    card.append(name, charInfo)
    grid.appendChild(card)
  })
  results.appendChild(grid)
}

// 3) Handle search click
btn.addEventListener('click', () => {
  // TODO:
  //   - const query = input.value.trim().toLowerCase()
  //   - If empty: url = API_URL
  //   - Else: url = `${API_URL}?search=${encodeURIComponent(query)}`
  //   - Show loading
  //   - fetch(url)
  //        .then(...)
  //        .then(data => renderCharacters(data.results))
  //        .catch(...)
  //        .finally(...)
  const query = input.value.trim().toLowerCase()

  const url = query ? `${API_URL}?search=${encodeURIComponent(query)}` : API_URL

  setLoadingState(true)

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then((data) => {
      renderCharacters(data.results)
    })
    .catch((error) => {
      console.log(error)
      if (error.message !== 'NOT_FOUND') {
        showMessage(
          'Something went wrong while fetching the character. Try again later.',
          true
        )
      }
    })
    .finally(() => {
      setLoadingState(false)
    })
})
