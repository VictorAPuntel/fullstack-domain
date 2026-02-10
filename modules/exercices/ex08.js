const list = [2, 5, 8, 11, 14, 17, 20]

let evenCount = 0
let oddCount = 0

for (const item of list) {
  if (item % 2 === 0) {
    evenCount++
  } else {
    oddCount++
  }
}

const result = {
  even: evenCount,
  odd: oddCount,
}

console.log(result)


