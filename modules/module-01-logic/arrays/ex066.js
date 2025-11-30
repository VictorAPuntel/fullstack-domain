// ex066 - Check If Any Negative
// 🎯 Goal: Determine if there is at least one negative number in the array.
// 🧠 Input: 1 array of numbers
// ⚙️ Process: Analyze the elements to check if any of them are smaller than zero
// 📤 Output: A message indicating whether or not the array contains a negative number
// 💡 Example: [2, -3, 4] → has a negative | [1, 2, 3] → no negative numbers found

function checkAnyNegative() {
  const numbers = [4, -2, 8, 5, -9]

  const atLeastOneNegative = numbers.some((num) => num < 0)

  if (atLeastOneNegative) {
    console.log(
      `Analyzing [${numbers.join(
        ', '
      )}] → The array contains at least one negative number.`
    )
  } else {
    console.log(
      `Analyzing [${numbers.join(', ')}] → No negative numbers found.`
    )
  }
}

checkAnyNegative()
