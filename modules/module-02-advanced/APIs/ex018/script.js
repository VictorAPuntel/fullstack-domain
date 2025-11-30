// 1) Get elements
const countryInput = document.getElementById('country-input')
const searchBtn = document.getElementById('search-btn')
const result = document.getElementById('result')

// 2) Base URL
const API_BASE_URL = 'https://restcountries.com/v3.1/name/'

// 3) Click handler
searchBtn.addEventListener('click', () => {
  const name = countryInput.value.trim()

  if (!name) {
    result.innerHTML =
      '<p class="message error">Please type a country name first.</p>'
    return
  }

  // Show loading
  result.innerHTML = '<p class="message">Loading...</p>'
  searchBtn.disabled = true
  searchBtn.textContent = 'Searching...'

  const url = API_BASE_URL + encodeURIComponent(name)

  fetch(url)
    .then((response) => {
      if (response.status === 404) {
        result.innerHTML = '<p class="message error">Country not found. 😢</p>'
        throw new Error('Country not found')
      }

      if (!response.ok) {
        throw new Error('Something went wrong')
      }

      return response.json()
    })
    .then((data) => {
      // A API retorna um array; vamos pegar o primeiro país
      const country = data[0]

      const flag = country.flags?.png || country.flags?.svg
      const officialName = country.name?.official || 'Unknown'
      const region = country.region || 'Unknown region'
      const capital = country.capital ? country.capital[0] : 'No capital'
      const population = country.population?.toLocaleString('en-US') ?? 'N/A'

      result.innerHTML = `
        <article class="country-card">
          <img
            class="flag"
            src="${flag}"
            alt="Flag of ${officialName}"
          />
          <div class="country-info">
            <div class="country-name">${officialName}</div>
            <div class="country-region">${region}</div>
            <div class="country-meta">
              <span><strong>Capital:</strong> ${capital}</span>
              <span><strong>Population:</strong> ${population}</span>
            </div>
          </div>
        </article>
      `
    })
    .catch((error) => {
      console.log(error)
      // Se não for o caso de 404 que já tratamos, mostra erro genérico
      if (!result.innerHTML.includes('Country not found')) {
        result.innerHTML =
          '<p class="message error">Failed to load country data. Try again later.</p>'
      }
    })
    .finally(() => {
      searchBtn.disabled = false
      searchBtn.textContent = 'Search'
    })
})
