const btn = document.getElementById('btn')
const adviceBox = document.getElementById('adviceBox')

btn.addEventListener('click', () => {
  adviceBox.textContent = 'Loading advice...'
  btn.disabled = true
  btn.textContent = 'Loading...'
  const API_URL = `https://api.adviceslip.com/advice?t=${Date.now()}`
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      return response.json()
    })
    .then((data) => {
      const advice = data.slip.advice
      adviceBox.textContent = advice
    })
    .catch((error) => {
      console.log(error)
      adviceBox.textContent = 'Server out, try again'
    })
    .finally(() => {
      btn.disabled = false
      btn.textContent = 'Get Advice'
    })
})
