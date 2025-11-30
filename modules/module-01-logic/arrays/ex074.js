// ex074 - Remove Falsy Values
// Goal: Remove falsy values from an array.
// Input: 1 array that may contain falsy values (false, 0, "", null, undefined, NaN)
// Process: Filter the array, keeping only truthy values.
// Output: New array with only truthy values

function removeFalsyValues() {
  const arr = [0, 1, false, 2, '', 3, null, 'hello', undefined, NaN, 4]

  const cleaned = arr.filter((item) => !!item)

  console.log(cleaned)
}

removeFalsyValues()
