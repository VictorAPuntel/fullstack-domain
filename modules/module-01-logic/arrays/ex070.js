// ex070 - Compare Approaches
// 🎯 Goal: Apply the same transformation using three different approaches: `for`, `.map()`, and `.reduce()`.
// 🧠 Input: 1 array of numbers
// ⚙️ Process: Double all numbers using each approach separately, comparing syntax and readability
// 📤 Output: Show the three resulting arrays and a short note about which approach feels clearer to you
// 💡 Example: [1, 2, 3] → [2, 4, 6]

function compareApproaches() {
  const numbers = [1, 2, 3, 4, 5]

  // 1️⃣ Traditional method with for
  const traditionalLoop = []
  for (let i = 0; i < numbers.length; i++) {
    traditionalLoop.push(numbers[i] * 2)
  }

  // 2️⃣ Using map()
  const mappedLoop = numbers.map((num) => num * 2)

  // 3️⃣ Using reduce()
  const reducedLoop = numbers.reduce((acc, num) => {
    acc.push(num * 2)
    return acc
  }, [])

  console.log('For loop:', traditionalLoop)
  console.log('Map:', mappedLoop)
  console.log('Reduce:', reducedLoop)

  console.log(
    '\n💬 The map() method is the clearest and most direct way to transform arrays.'
  )
}

compareApproaches()
