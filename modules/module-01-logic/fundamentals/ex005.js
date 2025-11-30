// ex005 - Convert meters → centimeters and millimeters
// Goal: Read a measurement in meters and convert it to centimeters and millimeters
// Input: Value in meters
// Process: Multiply by 100 and 1000 to convert
// Output: Display the equivalent value in cm and mm

const prompt = require('prompt-sync')({ sigint: true })

function metersConverter() {
  const meters = Number(prompt('Enter the length in meters: '))

  const centimeters = meters * 100
  const millimeters = meters * 1000

  console.log(`${meters} m = ${centimeters} cm | ${millimeters} mm`)
}

metersConverter()
