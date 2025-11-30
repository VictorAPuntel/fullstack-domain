// ex002 - Dog Viewer
// Step 1: Prepare elements and handle click before adding fetch

const btn = document.getElementById('loadDogBtn')
const imageArea = document.querySelector('.image-area')

// Próximo passo (ex002):
// - adicionar fetch
// - trocar texto por imagem
// - tratar loading

btn.addEventListener('click', () => {
  const API_URL = 'https://dog.ceo/api/breeds/image/random'

  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const img = document.createElement('img')
      img.src = data.message
      img.alt = 'Random Dog'
      imageArea.innerHTML = ''
      imageArea.appendChild(img)
    })
})
