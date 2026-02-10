function greaterThan10(list) {
  let count = 0

  for (const item of list) {
    if (item > 10) {
      count++
    }
  }

  return count
}

greaterThan10([5, 12, 3, 20])

function hasNegative(list) {
  for (const item of list) {
    if (item < 0) {
      return true
    }
  }

  return false
}

hasNegative([3, 7, -1, 4])

function checkAge(person) {
  if (person.age >= 18) {
    return 'Maior de idade'
  } else {
    return 'Menor de idade'
  }
}

checkAge({ name: 'Victor', age: 25 })

function countEvenOdd(list) {
  let evenCounter = 0
  let oddCounter = 0
  for (const item of list) {
    return item % 2 === 0 ? evenCounter++ : oddCounter++
  }

  return {
    even: evenCounter,
    odd: oddCounter,
  }
}

countEvenOdd([2, 5, 8, 11, 14])
