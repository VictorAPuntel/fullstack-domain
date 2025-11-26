// 1) Get elements
const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const results = document.getElementById('results')

// 2) API base URL
const API_BASE_URL = 'https://api.tvmaze.com/search/shows?q='

// 3) Handle search
// 3) Handle search
searchBtn.addEventListener('click', () => {
  const text = searchInput.value.trim()

  if (!text) {
    results.innerHTML = '<p>Please type a show name.</p>'
    return
  }

  results.innerHTML = '<p>Loading...</p>'
  searchBtn.disabled = true
  searchBtn.textContent = 'Loading'

  const url = API_BASE_URL + encodeURIComponent(text)

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Request failed')
      }
      return response.json()
    })
    .then((shows) => {
      results.innerHTML = ''

      if (!Array.isArray(shows) || shows.length === 0) {
        results.innerHTML = '<p>No results found.</p>'
        return
      }

      const ul = document.createElement('ul')

      shows.forEach((item) => {
        const show = item.show

        const name = show.name ?? 'No title'
        const year = show.premiered ? show.premiered.slice(0, 4) : 'N/A'
        const type = show.type ?? 'Unknown'

        const li = document.createElement('li')
        li.classList.add('show-item')

        const titleEl = document.createElement('p')
        titleEl.classList.add('show-title')
        titleEl.textContent = name

        const metaEl = document.createElement('p')
        metaEl.classList.add('show-meta')
        metaEl.textContent = `Type: ${type} | Year: ${year}`

        li.appendChild(titleEl)
        li.appendChild(metaEl)
        ul.appendChild(li)
      })

      results.appendChild(ul)
    })
    .catch((error) => {
      console.log(error)
      results.innerHTML =
        '<p class="show-meta">Failed to load TV show data. Try again later.</p>'
    })
    .finally(() => {
      searchBtn.disabled = false
      searchBtn.textContent = 'Search'
    })
})
