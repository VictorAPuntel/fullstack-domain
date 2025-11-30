// ex091 - Loop Through Object
// Goal: Practice iterating through object properties using for...in and Object.keys().
// Input: 1 object containing hero stats.
// Process:
// 1. Create an object "stats" with keys: strength, vitality, dexterity, intelligence, and luck.
// 2. Use a for...in loop to display each property name and its value.
// 3. Use Object.keys() to get all property names and display them as an array.
// 4. Use Object.values() to get all property values and display them as an array.
// Output: Display all keys and values using both methods.

function loopThroughObject() {
  const stats = {
    strength: 18,
    vitality: 16,
    dexterity: 12,
    intelligence: 10,
    luck: 8,
  }

  // Step 1: Display each key and value using for...in
  for (const key in stats) {
    console.log(`${key} → ${stats[key]}`)
  }
  // Step 2: Display all keys using Object.keys()
  console.log(Object.keys(stats))
  // Step 3: Display all values using Object.values()
  console.log(Object.values(stats))
}

loopThroughObject()
