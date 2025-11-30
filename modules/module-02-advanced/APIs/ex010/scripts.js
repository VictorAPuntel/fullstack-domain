const btn = document.getElementById('btn')
const list = document.getElementById('list')
const API_URL =
  'https://restcountries.com/v3.1/all?fields=name,flags,region,population'

btn.addEventListener('click', () => {
  list.innerHTML = '<p>Loading...</p>'
  btn.disabled = true
  btn.textContent = 'Loading'

  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something Went Wrong')
      }
      return response.json()
    })
    .then((data) => {
      list.innerHTML = ''
      data.forEach((country) => {
        const flag = country.flags.png
        const name = country.name.common
        const region = country.region
        const population = country.population

        const li = document.createElement('li')

        const img = document.createElement('img')
        img.src = flag
        img.alt = `${name} flag`

        const info = document.createElement('div')
        info.classList.add('country-info')

        const nameP = document.createElement('p')
        nameP.textContent = name

        const regionP = document.createElement('p')
        regionP.textContent = region

        const populationP = document.createElement('p')
        populationP.textContent = population.toLocaleString('en-US')

        info.append(nameP, regionP, populationP)
        li.append(img, info)
        list.appendChild(li)
      })
    })
    .catch((error) => {
      console.log(error)
      list.innerHTML = 'Server out, try again'
    })
    .finally(() => {
      btn.disabled = false
      btn.textContent = 'Load Countries'
    })
})
