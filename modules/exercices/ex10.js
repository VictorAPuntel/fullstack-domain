function analyzeNumbers(list) {
  let total = 0
  let count = 0
  let max = null
  let min = null

  for (let i = 0; i < list.length; i++) {
    const value = list[i]

    if (typeof value !== 'number' || Number.isNaN(value)) {
      continue
    }

    total += value
    count++

    if (max === null || value > max) {
      max = value
    }

    if (min === null || value < min) {
      min = value
    }
  }

  if (count === 0) return null

  return {
    total,
    average: Number((total / count).toFixed(2)),
    max,
    min,
  }
}
