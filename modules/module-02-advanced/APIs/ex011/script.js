const btn = document.getElementById('btn')
const jokeBox = document.getElementById('joke')
const API_URL = 'https://official-joke-api.appspot.com/random_joke'

btn.addEventListener('click', () => {
  jokeBox.innerHTML = '<p>Loading</p>'
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
      jokeBox.innerHTML = ''
      const setup = data.setup
      const punchline = data.punchline

      const setupP = document.createElement('p')
      setupP.textContent = setup

      const punchlineP = document.createElement('p')
      punchlineP.textContent = punchline

      jokeBox.append(setupP, punchlineP)
    })
    .catch((error) => {
      console.log(error)
      jokeBox.innerHTML = '<p>Server out, try again!</p>'
    })
    .finally(() => {
      btn.disabled = false
      btn.textContent = 'Get Joke'
    })
})
