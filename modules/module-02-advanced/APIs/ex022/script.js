// ex022 - Users Directory (JSONPlaceholder API)

// 1) Get elements
const loadBtn = document.getElementById('load-btn')
const usersContainer = document.getElementById('users-container')

// 2) API URL
const API_URL = 'https://jsonplaceholder.typicode.com/users'

function createMessage(text, isError = false) {
  usersContainer.innerHTML = ''
  const p = document.createElement('p')
  p.textContent = text
  p.classList.add('message')
  if (isError) p.classList.add('error')
  usersContainer.appendChild(p)
}

function setLoadingState(isLoading) {
  if (isLoading) {
    createMessage('Loading...')
    loadBtn.disabled = true
    loadBtn.textContent = 'Loading'
  } else {
    loadBtn.disabled = false
    loadBtn.textContent = 'Load Users'
  }
}

function renderUsers(users) {
  usersContainer.innerHTML = ''

  const grid = document.createElement('div')
  grid.classList.add('users-grid')

  users.forEach((user) => {
    const { name, username, email, website, address } = user
    const city = address.city

    const card = document.createElement('div')
    card.classList.add('user-card')

    const title = document.createElement('h1')
    title.classList.add('user-name')
    title.textContent = name

    const subtitle = document.createElement('h2')
    subtitle.classList.add('user-username')
    subtitle.textContent = username

    const info = document.createElement('div')
    info.classList.add('user-info')

    const emailP = document.createElement('p')
    emailP.textContent = `Email: ${email}`

    const cityP = document.createElement('p')
    cityP.textContent = `City: ${city}`

    const websiteP = document.createElement('p')
    websiteP.textContent = `Website: ${website}`

    info.append(emailP, cityP, websiteP)
    card.append(title, subtitle, info)
    grid.appendChild(card)
  })

  usersContainer.appendChild(grid)
}

loadBtn.addEventListener('click', () => {
  setLoadingState(true)
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then((data) => {
      renderUsers(data)
    })
    .catch((error) => {
      console.error(error)
      createMessage(
        'Something went wrong while fetching users. Try again later.',
        true
      )
    })
    .finally(() => {
      setLoadingState(false)
    })
})
