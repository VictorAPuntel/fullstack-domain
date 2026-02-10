const list = [
  { name: 'Book', price: 30, category: 'education' },
  { name: 'Pen', price: 5, category: 'office' },
  { name: 'Notebook', price: 1200, category: 'electronics' },
  { name: 'Pencil', price: 3, category: 'office' },
]
let total = 0
for (const item of list) {
  if (item.category === 'office') {
    total += item.price
  }
}
