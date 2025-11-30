const btn = document.getElementById('btn')
const imageArea = document.getElementById('image-area')

btn.addEventListener('click', () => {
  imageArea.innerHTML = '<p>Loading...</p>'
  btn.disabled = true
  btn.textContent = 'Loading'

  const API_URL = 'https://dog.ceo/api/breeds/image/random'
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      return response.json()
    })
    .then((data) => {
      imageArea.innerHTML = ''
      const image = data.message
      const img = document.createElement('img')
      img.src = image

      imageArea.appendChild(img)
    })
    .catch((error) => {
      console.log(error)
      imageArea.innerHTML = '<p>Server out, try again</p>'
    })
    .finally(() => {
      btn.disabled = false
      btn.textContent = 'Load Dog'
    })
})
