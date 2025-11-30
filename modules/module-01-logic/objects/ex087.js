// ex087 - Object of Scores → Array of Averages
// Goal: Given an object where each key is a student and the value is an array of scores, return an array of averages.
// Input: 1 object (e.g. { Alice: [10, 8, 7], Bob: [5, 6, 8] })
// Process: Loop through the object, calculate each student's average, and store results in an array.
// Output: Display the array of averages (e.g. [8.33, 6.33])

function objectScoresToAverages() {
  const scores = {
    Alice: [10, 8, 7],
    Bob: [5, 6, 8],
    Charlie: [9, 9, 10],
  }
  const result = Object.entries(scores).map(([names, grades]) => {
    const average = grades.reduce((acc, n) => acc + n, 0) / grades.length
    return { names, average: Number(average.toFixed(2)) }
  })

  //  const result = []

  //  for (const student in scores) {
  //    const grades = scores[student]
  //    let sum = 0

  //    for (const grade of grades) {
  //      sum += grade
  //    }

  //    const average = sum / grades.length
  //    result.push({ name: student, average: Number(average.toFixed(2)) })
  //  }

  console.log(result)
}
