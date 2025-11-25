// 1) Get elements
const btn = document.getElementById('btn')
const list = document.getElementById('list')

// 2) API URL
const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=10'

// 3) Button click
btn.addEventListener('click', () => {
  list.innerHTML = '<p>Loading...</p>'
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
      list.innerHTML = ''
      data.forEach((todo) => {
        const li = document.createElement('li')
        li.classList.add('todo')

        const dot = document.createElement('span')
        dot.classList.add('dot')

        if (todo.completed) {
          dot.classList.add('done')
        } else {
          dot.classList.add('pending')
        }
        const title = document.createElement('span')
        title.classList.add('title')
        title.textContent = todo.title

        li.append(dot, title)
        list.appendChild(li)
      })
    })
    .catch((error) => {
      console.log(error)
      list.innerHTML =
        '<p style="color:#f87171;">Failed to load todos. Try again. ❌</p>'
    })
    .finally(() => {
      btn.disabled = false
      btn.textContent = 'Load Todos'
    })
})
