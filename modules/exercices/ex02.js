// 2) Anagrama Válido (Frequência)

// Enunciado:
// Dadas duas strings s e t, retorne true se t é um anagrama de s.
// Exemplo: "anagram" e "nagaram" → true
// Meta: O(n)

function anagrams(s, t) {
  const cleanString = (string) =>
    string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
  return cleanString(s) === cleanString(t)
}

console.log(anagrams('amor', 'roma'))

// OU

function anagrams(s, t) {
  if (s.length !== t.length) return false

  const count = new Map()

  for (const ch of s) {
    count.set(ch, (count.get(ch) || 0) + 1)
  }

  for (const ch of t) {
    if (!count.has(ch)) return false
    count.set(ch, count.get(ch) - 1)
    if (count.get(ch) === 0) count.delete(ch)
  }

  return count.size === 0
}
