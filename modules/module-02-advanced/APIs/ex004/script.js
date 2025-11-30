const button = document.getElementById('btn')
const card = document.querySelector('.card')

button.addEventListener('click', () => {
  card.innerHTML = '<p>Loading...</p>'
  button.disabled = true
  button.textContent = 'Loading...'
  const API_URL = 'https://randomuser.me/api/'
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Server response was not ok')
      }
      return response.json()
    })
    .then((data) => {
      const firstName = data.results[0].name.first
      const lastName = data.results[0].name.last
      const fullname = `${firstName} ${lastName}`
      const email = data.results[0].email
      const picture = data.results[0].picture.large
      const img = document.createElement('img')
      img.src = picture
      img.classList.add('img')
      const name = document.createElement('p')
      name.textContent = fullname
      const emailP = document.createElement('p')
      emailP.textContent = email
      card.innerHTML = ''
      card.append(img, name, emailP)
    })
    .catch((error) => {
      console.log(error)
      card.innerHTML = '<p>Failed to load person. Try again. 😢</p>'
    })
    .finally(() => {
      button.disabled = false
      button.textContent = 'Load User'
    })
})
