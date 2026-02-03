let nums = [2, 7, 11, 25]
let target = 9

function twoSums(nums, target) {
  const seen = new Map()

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    const need = target - x

    if (seen.has(need)) {
      return [seen.get(need), i]
    }

    seen.set(x, i)
  }

  return []
}
