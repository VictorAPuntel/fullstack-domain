const btn = document.getElementById('btn')
const list = document.querySelector('#list')

btn.addEventListener('click', () => {
  list.innerHTML = '<p>Loading...</p>'
  btn.disabled = true
  btn.textContent = 'Loading...'

  const API_URL = 'https://jsonplaceholder.typicode.com/posts'

  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      return response.json()
    })
    .then((data) => {
      list.innerHTML = ''

      data.forEach((post) => {
        const li = document.createElement('li')
        li.textContent = post.title
        list.appendChild(li)
      })
    })
    .catch((error) => {
      console.log(error)
      list.innerHTML = '<p>Failed to load posts. Try again.</p>'
    })
    .finally(() => {
      btn.disabled = false
      btn.textContent = 'Load Posts'
    })
})
