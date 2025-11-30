const btn = document.getElementById('btn')
const quoteBox = document.getElementById('quote')
const API_URL = 'https://dummyjson.com/quotes/random'

btn.addEventListener('click', () => {
  quoteBox.innerHTML = '<p>Loading...</p>'
  btn.disabled = true
  btn.textContent = 'Loading'

  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something Went Wrong!')
      }
      return response.json()
    })
    .then((data) => {
      quoteBox.innerHTML = ''
      const quote = data.quote
      const author = data.author

      const quoteP = document.createElement('p')
      quoteP.textContent = quote

      const authorP = document.createElement('p')
      authorP.textContent = author

      quoteBox.append(quoteP, authorP)
    })
    .catch((error) => {
      console.log(error)
      quoteBox.innerHTML = '<p>Server out,  try again</p>'
    })
    .finally(() => {
      btn.disabled = false
      btn.textContent = 'Get Quote'
    })
})
