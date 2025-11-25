// 1) Get elements
const btn = document.getElementById('btn')
const area = document.getElementById('area')

// 2) API URL
const API_URL = 'https://dog.ceo/api/breeds/image/random'

// 3) Button click
btn.addEventListener('click', () => {
  area.innerHTML = '<p>Loading...</p>'
  btn.disabled = true
  btn.textContent = 'Loading'

  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something went wrong, try again')
      }
      return response.json()
    })
    .then((data) => {
      setTimeout(() => {
        area.innerHTML = ''
        const img = document.createElement('img')
        img.src = data.message
        area.appendChild(img)
      }, 1000)
    })
    .catch((error) => {
      console.log(error)
      area.innerHTML =
        '<p style="color:#f87171;">Failed to load dog. Try again. ❌</p>'
    })
    .finally(() => {
      setTimeout(() => {
        btn.disabled = false
        btn.textContent = 'Load Dog'
      }, 1000)
    })
})
