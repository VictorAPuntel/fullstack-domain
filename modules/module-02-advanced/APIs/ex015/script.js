const btn = document.getElementById('btn')
const result = document.getElementById('result')

const API_URL = 'https://api.frankfurter.app/latest?from=USD&to=BRL'

btn.addEventListener('click', () => {
  result.innerHTML = '<p>Loading...</p>'
  btn.disabled = true
  btn.textContent = 'Loading...'

  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to load data')
      }
      return response.json()
    })
    .then((data) => {
      const rate = data.rates.BRL
      const date = data.date

      result.innerHTML = `
        <div class="card">
          <h2>USD → BRL</h2>
          <p><strong>1 USD = ${rate.toFixed(2)} BRL</strong></p>
          <p>Updated: ${date}</p>
        </div>
      `
    })
    .catch((error) => {
      console.log(error)
      result.innerHTML = '<p>Failed to load rate. Try again.</p>'
    })
    .finally(() => {
      btn.disabled = false
      btn.textContent = 'Load Exchange Rate'
    })
})
