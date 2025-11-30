// ex073 - Difference of Arrays
// Goal: Find elements that exist in one array but not in the other.
// Input: 2 arrays (may have repeated elements)
// Process: Return a new array with items that are unique to each list (not shared).
// Output: New array containing only elements that are NOT common between the two arrays

function differenceOfArrays() {
  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = [3, 4, 5, 6, 7]

  const onlyArr1 = arr1.filter((item) => !arr2.includes(item))
  const onlyArr2 = arr2.filter((item) => !arr1.includes(item))

  const difference = [...onlyArr1, ...onlyArr2]

  console.log(difference)
}

differenceOfArrays()
