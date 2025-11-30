// ex082 - Loop Through Object
// Goal: Practice looping through an object to display all key/value pairs.
// Input: 1 object (e.g. character stats)
// Process: Use a loop to go through each property and display its key and value.
// Output: Display each pair as "key → value" in the console.

function loopThroughObject() {
  const stats = {
    strength: 18,
    dexterity: 12,
    vitality: 16,
    intelligence: 10,
    luck: 8,
  }

  for (const key in stats) {
    console.log(`${key} → ${stats[key]}`)
  }
}

loopThroughObject()
