function print1ToN(n) {
  if (n <= 0) return
  for (let i = 1; i <= n; i++) {
    console.log(i)
  }
}

function sumToN(n) {
  if (n <= 0) return 0

  let total = 0
  for (let i = 1; i < n; i++) {
    total += i
  }
  console.log(total)
}

function countEvens(n) {
  if (n <= 0) return
  let count = 0
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      count++
    }
  }
  console.log(count)
}

// testes
// print1ToN(0)

//console.log(sumToN(5)) // 15
// console.log(sumToN(10)) // 55

// console.log(countEvens(10)) // 5
// console.log(countEvens(11)) // 5

function sumArray(nums) {
  let total = 0
  for (const num of nums) {
    total += num
  }
  return total
}

function countEvensInArray(nums) {
  let count = 0
  for (const num of nums) {
    if (num % 2 === 0) {
      count++
    }
  }
  return count
}

function maxNumber(nums) {
  if (nums.length === 0) return null
  let highestNum = nums[0]
  for (const num of nums) {
    if (num > highestNum) {
      highestNum = num
    }
  }
  return highestNum
}

// testes
// console.log(sumArray([2, 5, 3])) // 10
// console.log(sumArray([])) // 0

// console.log(countEvensInArray([1, 2, 2, 3, 10])) // 3
// console.log(countEvensInArray([1, 3, 5])) // 0

// console.log(maxNumber([7, 2, 9, 1])) // 9
// console.log(maxNumber([])) // null

function filterEvens(nums) {
  if (nums.length === 0) return []

  const evenArray = nums.filter((num) => num % 2 === 0)
  return evenArray
}

function double(nums) {
  const doubleArray = nums.map((num) => num * 2)
  return doubleArray
}

function findFirstGreater(nums, x) {
  const firstGreater = nums.find((num) => num > x)
  return firstGreater ?? null
}

// testes
// console.log(filterEvens([1, 2, 3, 4, 10])) // [2,4,10]
// console.log(double([2, 5, 3])) // [4,10,6]
// console.log(findFirstGreater([1,4,6,2], 4)); // 6
// console.log(findFirstGreater([1,2,3], 10));  // null

function cartTotal(items) {
  return items.reduce((acc, item) => {
    return acc + item.price * item.qty
  }, 0)
}

console.log(
  cartTotal([
    { price: 10, qty: 2 },
    { price: 5, qty: 3 },
  ])
) // 35
console.log(cartTotal([])) // 0

function safeCartTotal(items) {
  if (!Array.isArray(items) || items.length === 0) return 0

  return items.reduce((acc, item) => {
    const price = Number(item.price)
    const qty = Number(item.qty)

    const priceIsValid = Number.isFinite(price) && price >= 0
    const qtyIsValid = Number.isFinite(qty) && qty > 0

    if (!priceIsValid || !qtyIsValid) return acc

    return acc + price * qty
  }, 0)
}

console.log(
  safeCartTotal([
    { price: 10, qty: 2 },
    { price: '5', qty: 3 },
    { price: 5, qty: -1 },
    { price: 2.5, qty: 4 },
  ])
) // 30
