function sumTotalList(list) {
  let total = 0
  for (const item of list) {
    if (typeof item === 'number' && item > 10) {
      total += item
    }
  }
  console.log(total)

  return total
}

sumTotalList([10, '20', 5, null, 30, -3, 15])
