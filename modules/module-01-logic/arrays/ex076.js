// ex076 - Filter and Double Even Numbers
// Goal: From an array of numbers, filter only the even ones and double their value.
// Input: 1 array of integers
// Process: Use filter() to get even numbers, then map() to double them.
// Output: New array with doubled even numbers

function filterAndDoubleEven() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const filtered = numbers.filter((num) => num % 2 === 0)
  const result = filtered.map((num) => num * 2)

  console.log(result) // Expected output: [4, 8, 12, 16, 20]
}

filterAndDoubleEven()
