// ex072 - Intersection of Arrays
// Goal: Find the common elements between two arrays.
// Input: 2 arrays (may have different lengths and repeated elements)
// Process: Compare elements from both arrays and return only those that appear in both (without duplicates).
// Output: New array with common elements (in original order of the first array)

function intersectionOfArrays() {
  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = [3, 4, 5, 6, 7]

  const common = arr1.filter((item) => arr2.includes(item))

  console.log(common)
}

intersectionOfArrays()
