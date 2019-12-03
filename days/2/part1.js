const fs = require('fs')

const OPCODES = {
  1: (x, y) => x + y,
  2: (x, y) => x * y
}

let pos = 0
const input = fs.readFileSync('./input', 'utf8').split(',').map(n => Number(n))

input[1] = 12
input[2] = 2

while (input[pos] !== 99) {
  const opFn = OPCODES[input[pos]]
  const total = opFn(input[input[pos + 1]], input[input[pos + 2]])

  input[input[pos + 3]] = total
  pos += 4
}

console.log(input[0])
