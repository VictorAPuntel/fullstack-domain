// ex001 - First Fetch
// Goal: Make a GET request and display the result in the console

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

// 1) Make a request
fetch(API_URL)
  // 2) Convert response to JSON
  .then((response) => response.json())

  // 3) Display the data
  .then((data) => {
    console.log('API data:', data)
  })

  // 4) Handle errors
  .catch((error) => {
    console.error('Something went wrong:', error)
  })
