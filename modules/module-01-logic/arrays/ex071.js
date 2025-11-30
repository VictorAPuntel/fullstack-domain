// ex071 - Remove Duplicates (keep order)
// Goal: Remove duplicated values from an array, keeping the first occurrence.
// Input: 1 array (may contain repeated elements)
// Process: Return a new array without duplicates, preserving order.
// Output: New array with only unique values

function removeDuplicates() {
  const arr = [1, 2, 2, 3, 1, 4]

  const unique = arr.reduce((acc, value) => {
    if (!acc.includes(value)) {
      acc.push(value)
    }
    return acc
  }, [])
  console.log(unique)
}

removeDuplicates()
