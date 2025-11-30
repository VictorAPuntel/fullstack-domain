// 1) Get elements
const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const results = document.getElementById('results')

// 2) API base URL
const API_BASE_URL = 'https://api.tvmaze.com/search/shows?q='

function createMessage(text, isError = false) {
  results.innerHTML = ''
  const p = document.createElement('p')
  p.textContent = text
  p.classList.add('message')
  if (isError) p.classList.add('error')
  results.appendChild(p)
}

function stripHtml(html) {
  const temp = document.createElement('div')
  temp.innerHTML = html || ''
  return temp.textContent || temp.innerText || ''
}

function renderShows(shows) {
  results.innerHTML = ''

  if (!shows.length) {
    createMessage('No shows found. Try another title.')
    return
  }

  const grid = document.createElement('div')
  grid.classList.add('shows-grid')

  shows.forEach((item) => {
    const show = item.show
    const card = document.createElement('article')
    card.classList.add('show-card')

    // Image
    if (show.image && show.image.medium) {
      const img = document.createElement('img')
      img.src = show.image.medium
      img.alt = show.name
      card.appendChild(img)
    }

    const content = document.createElement('div')
    content.classList.add('show-content')

    // Title
    const title = document.createElement('h2')
    title.classList.add('show-title')
    title.textContent = show.name
    content.appendChild(title)

    // Meta (rating + language)
    const meta = document.createElement('p')
    meta.classList.add('show-meta')

    const rating = show.rating && show.rating.average
    const language = show.language

    const parts = []
    if (rating) parts.push(`⭐ ${rating.toFixed(1)}`)
    if (language) parts.push(language)

    meta.textContent = parts.join(' · ')
    content.appendChild(meta)

    // Summary (short)
    if (show.summary) {
      const summary = document.createElement('p')
      summary.classList.add('show-summary')
      const cleanSummary = stripHtml(show.summary)
      summary.textContent =
        cleanSummary.length > 140
          ? cleanSummary.slice(0, 137) + '...'
          : cleanSummary
      content.appendChild(summary)
    }

    card.appendChild(content)
    grid.appendChild(card)
  })

  results.appendChild(grid)
}

function setLoadingState(isLoading) {
  if (isLoading) {
    searchBtn.disabled = true
    searchBtn.textContent = 'Loading...'
  } else {
    searchBtn.disabled = false
    searchBtn.textContent = 'Search'
  }
}

// 3) Handle search
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim()

  // Empty input
  if (!query) {
    createMessage('Please type a show name.')
    return
  }

  // Loading state
  setLoadingState(true)
  createMessage('Loading...')

  const url = API_BASE_URL + encodeURIComponent(query)

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then((data) => {
      renderShows(data)
    })
    .catch((error) => {
      console.error(error)
      createMessage(
        'Something went wrong while fetching shows. Try again later.',
        true
      )
    })
    .finally(() => {
      setLoadingState(false)
    })
})

// Optional: search on Enter
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchBtn.click()
  }
})
