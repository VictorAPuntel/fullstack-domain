function sumValidprices(list) {
  let total = 0

  for (let i = 0; i < list.length; i++) {
    const value = list[i]

    if (typeof value !== 'number' || Number.isNaN(value) || value < 0) {
      continue
    }

    total += value
  }

  return total
}

sumValidPrices([10, -5, '3', null, 8, NaN, 2])
// resultado: 20

function countValues(list) {
  let valid = 0
  let invalid = 0

  for (let i = 0; i < list.length; i++) {
    const value = list[i]

    if (typeof value !== 'number' || Number.isNaN(value) || value < 0) {
      invalid++
    } else {
      valid++
    }
  }

  return {
    valid: valid,
    invalid: invalid,
  }
}

countValues([10, -5, '3', null, 8, NaN, 2])

function findFirstInvalid(list) {
  let firstItem = list.find(
    (item) => typeof item !== 'number' || Number.isNaN(item) || item < 0
  )

  return firstItem ?? null
}

findFirstInvalid([10, 5, 3, null, 8, -2])
// resultado: null
