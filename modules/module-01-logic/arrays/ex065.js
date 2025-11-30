// ex065 - Check All Positive
// 🎯 Goal: Verify if all numbers in an array are positive.
// 🧠 Input: 1 array of numbers
// ⚙️ Process: Analyze each element to determine if every value is greater than zero
// 📤 Output: A message indicating whether all numbers are positive or not
// 💡 Example: [1, 2, 3] → all positive | [1, -1, 2] → not all positive

function checkAllPositive() {
  const numbers = [3, -1, 5, 7, 9]

  const allPositive = numbers.every((num) => num > 0)
  if (allPositive) {
    console.log('All numbers are positive')
  } else {
    console.log('Not all numbers are positive')
  }
}

checkAllPositive()
