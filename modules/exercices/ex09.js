function evenOddCounter(list) {
  let evenCounter = 0
  let oddCounter = 0

  for (const item of list) {
    if (item % 2 === 0) {
      evenCounter++
    } else {
      oddCounter++
    }
  }

  const result = {
    even: evenCounter,
    odd: oddCounter,
  }

  return result
}

evenOddCounter([2, 5, 8, 11, 14, 17, 20])
