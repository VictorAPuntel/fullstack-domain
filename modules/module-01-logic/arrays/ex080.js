// ex080 - Filter and Sort Numbers
// Goal: From an array of numbers, keep only positive values and sort them in ascending order.
// Input: 1 array with positive and negative integers
// Process: Use filter() to remove negatives, then sort() to order ascending.
// Output: New array with positive numbers sorted from smallest to largest

function filterAndSortNumbers() {
  const numbers = [5, -2, 10, -8, 3, 0, 7, -1, 2]

  const result = numbers.filter((num) => num >= 0).sort((a, b) => a - b)

  console.log(result) // Expected output: [0, 2, 3, 5, 7, 10]
}

filterAndSortNumbers()
  