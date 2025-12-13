const button = document.getElementById('load-btn')
const factContainer = document.getElementById('fact-container')
const API_URL = 'https://catfact.ninja/fact'

function showMessage(text, isError = false) {
  factContainer.innerHTML = ''
  const p = document.createElement('p')
  p.textContent = text
  p.classList.add('message')
  if (isError) {
    p.classList.add('error')
  }
  factContainer.appendChild(p)
}

function setLoadingState(isLoading) {
  if (isLoading) {
    showMessage('Loading...')
    button.disabled = true
    button.textContent = 'Loading...'
  } else {
    button.disabled = false
    button.textContent = 'Load Fact'
  }
}

function renderFact(catFact) {
  factContainer.innerHTML = ''

  if (!catFact.fact) {
    showMessage('No fact found')
    return
  }

  const p = document.createElement('p')
  p.textContent = catFact.fact
  factContainer.appendChild(p)
}

async function loadCatFact() {
  try {
    setLoadingState(true)

    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    renderFact(data)
  } catch (error) {
    console.log(error)
    showMessage('Failed to load fact. Try again.', true)
  } finally {
    setLoadingState(false)
  }
}

button.addEventListener('click', loadCatFact)
