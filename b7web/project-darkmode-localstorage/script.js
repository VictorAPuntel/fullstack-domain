function setTheme(theme) {
  localStorage.setItem('theme', theme)
  updateTheme()
}

function updateTheme() {
  let theme = localStorage.getItem('theme')
  document.querySelector('#theme').innerHTML = `Theme ${theme}`
  document.querySelector('body').classList.toggle('light')
}

updateTheme()
