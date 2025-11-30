// ex075 - Filter Even and Odd Numbers
// Goal: Separate even and odd numbers from an array.
// Input: 1 array of integers
// Process: Use filter() to create two new arrays: one with even numbers and one with odd numbers.
// Output: Display both arrays in the console

function filterEvenAndOdd() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const even = numbers.filter((num) => num % 2 === 0)
  const odd = numbers.filter((num) => num % 2 !== 0)

  console.log(even) // Expected output: [2, 4, 6, 8, 10]
  console.log(odd) // Expected output: [1, 3, 5, 7, 9]
}

filterEvenAndOdd()
