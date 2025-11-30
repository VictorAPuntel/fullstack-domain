const btn = document.getElementById('load-btn')
const factsContainer = document.getElementById('facts-container')
const API_URL = 'https://catfact.ninja/facts?limit=5'

btn.addEventListener('click', () => {
  factsContainer.innerHTML = '<p>Loading...</p>'
  btn.disabled = true
  btn.textContent = 'Loading'

  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      return response.json()
    })
    .then((facts) => {
      factsContainer.innerHTML = ''
      const ul = document.createElement('ul')
      console.log(facts)

      facts.data.forEach((f) => {
        const li = document.createElement('li')
        li.textContent = f.fact
        ul.appendChild(li)
      })
      factsContainer.appendChild(ul)
    })
    .catch((error) => {
      console.log(error)
      factsContainer.innerHTML = '<p>Server out, try again</p>'
    })
    .finally(() => {
      btn.disabled = false
      btn.textContent = 'Load Facts'
    })
})
