// ex034 - Average of Grades
// Goal: Ask for 4 grades, calculate the average, and display if the student passed (≥7) or failed.
// Input: 4 numbers (grades)
// Process: Sum all grades, calculate the average, and check the result
// Output: Display the average and the final status (passed/failed)

const prompt = require('prompt-sync')({ sigint: true })

function averageGrades() {
  let grades = []
  let sum = 0

  for (let i = 0; i < 4; i++) {
    let num = Number(prompt(`Write the ${i + 1} grade: `))
    grades.push(num)
  }

  for (let i = 0; i < grades.length; i++) {
    sum += grades[i]
  }

  let average = sum / grades.length

  if (average >= 7) {
    console.log(`Approved! Your average is ${average.toFixed(2)}`)
  } else {
    console.log(`Reproved! Your average is ${average.toFixed(2)}`)
  }
}

averageGrades()
