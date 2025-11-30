const btn = document.getElementById('btn')
const gallery = document.getElementById('gallery')

btn.addEventListener('click', () => {
  gallery.innerHTML = '<p>Loading...</p>'
  btn.disabled = true
  btn.textContent = 'Loading'
  const API_URL = 'https://dog.ceo/api/breeds/image/random'
  gallery.innerHTML = ''
  for (let i = 0; i < 3; i++) {
    fetch(API_URL)
      .then((respose) => {
        if (!respose.ok) {
          throw new Error('Something went wrong')
        }
        return respose.json()
      })
      .then((data) => {
        const message = data.message
        const img = document.createElement('img')
        img.src = message
        gallery.appendChild(img)
      })
      .catch((error) => {
        console.log(error)
        gallery.innerHTML = '<p>Server out, try again</p>'
      })
      .finally(() => {
        btn.disabled = false
        btn.textContent = 'Load Dog'
      })
  }
})
