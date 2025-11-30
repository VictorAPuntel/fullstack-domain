const btn = document.getElementById('loadDogBtn')
const imageArea = document.querySelector('.image-area')

btn.addEventListener('click', () => {
  imageArea.innerHTML = '<p>Loading... 🐾</p>'
  btn.disabled = true
  btn.textContent = 'Loading...'
  const API_URL = 'https://dog.ceo/api/breeds/image/random'
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Server response was not ok')
      }
      return response.json()
    })
    .then((data) => {
      const img = document.createElement('img')
      img.src = data.message
      img.alt = 'Random Dog'
      imageArea.innerHTML = ''
      imageArea.appendChild(img)
    })
    .catch((error) => {
      console.log(error)
      imageArea.innerHTML = '<p>Failed to load dog. Try again. 😢</p>'
    })
    .finally(() => {
      btn.disabled = false
      btn.textContent = 'Load Dog'
    })
})
