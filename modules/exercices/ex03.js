// 3) Primeira Letra Única (Map)

// Enunciado:
// Dada uma string, retorne o índice do primeiro caractere que não se repete. Se não existir, retorne -1.
// Exemplo: "leetcode" → 0, "aabb" → -1
// Meta: O(n)

function firstUniqueChar(s) {
  const count = new Map()

  // 1) contar frequência
  for (const ch of s) {
    count.set(ch, (count.get(ch) || 0) + 1)
  }

  // 2) achar o primeiro com frequência 1
  for (let i = 0; i < s.length; i++) {
    if (count.get(s[i]) === 1) {
      return i
    }
  }

  return -1
}
