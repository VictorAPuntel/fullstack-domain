function setTheme(theme) {
  localStorage.setItem('theme', theme)
  updateTheme()
}

function updateTheme() {
  let theme = localStorage.getItem('theme') || 'dark'
  document.querySelector('#theme').innerHTML = `Theme ${theme}`

  if (theme === 'light') {
    body.classList.add('light')
  } else {
    body.classList.remove('light')
  }
}

updateTheme()
