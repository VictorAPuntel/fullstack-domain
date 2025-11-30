const btn = document.getElementById('btn')
const avatar = document.getElementById('avatar')
const nameEl = document.getElementById('name')
const emailEl = document.getElementById('email')
const countryEl = document.getElementById('country')

btn.addEventListener('click', () => {
  nameEl.textContent = 'Loading User...'
  btn.disabled = true
  btn.textContent = 'Loading'

  const API_URL = 'https://randomuser.me/api/'
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      return response.json()
    })
    .then((data) => {
      const results = data.results[0]
      avatar.textContent = ''
      nameEl.textContent = ''
      emailEl.textContent = ''
      countryEl.textContent = ''

      const picture = results.picture.thumbnail
      const fullName = `${results.name.first} ${results.name.last}`
      const email = results.email
      const country = results.location.country

      avatar.src = picture
      nameEl.textContent = fullName
      emailEl.textContent = email
      countryEl.textContent = country
    })
    .catch((error) => {
      console.log(error)
      nameEl.textContent = 'Server out, try again'
    })
    .finally(() => {
      btn.disabled = false
      btn.textContent = 'Load Profile'
    })
})
