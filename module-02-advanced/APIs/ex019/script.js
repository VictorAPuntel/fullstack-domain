// 1) Get elements
const categorySelect = document.getElementById('category-select')
const btn = document.getElementById('btn')
const jokeText = document.getElementById('joke')

// 2) API URLs
const API_CATEGORIES = 'https://api.chucknorris.io/jokes/categories'
const API_JOKE = 'https://api.chucknorris.io/jokes/random?category='

// 3) Fetch categories ON LOAD
// TODO:
// - fetch(API_CATEGORIES)
// - check response.ok
// - parse JSON
// - populate select with <option>
// - handle errors
document.addEventListener('DOMContentLoaded', () => {
  fetch(API_CATEGORIES)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`)
      }
      return response.json()
    })
    .then((data) => {
      console.log(data)

      data.forEach((category) => {
        let opt = document.createElement('option')
        opt.value = category
        opt.textContent = category
        categorySelect.append(opt)
      })
    })
    .catch((error) => {
      console.error('Error in find data:', error)
    })
})

// 4) Handle button click
btn.addEventListener('click', () => {
  const category = categorySelect.value

  if (!category) {
    jokeText.textContent = 'Please select a category first.'
    return
  }

  jokeText.textContent = 'Loading...'
  btn.disabled = true
  btn.textContent = 'Loading...'

  fetch(API_JOKE + category)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      return response.json()
    })
    .then((data) => {
      jokeText.textContent = data.value
    })
    .catch((error) => {
      console.log(error)
      jokeText.textContent = 'Failed to load joke.'
    })
    .finally(() => {
      btn.disabled = false
      btn.textContent = 'Get Joke'
    })
})
