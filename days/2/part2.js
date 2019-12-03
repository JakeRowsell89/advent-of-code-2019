const fs = require('fs')

const OPCODES = {
  1: (x, y) => x + y,
  2: (x, y) => x * y
}


const inputImmutable = fs.readFileSync('./input', 'utf8').split(',').map(n => Number(n))

for (var i = 0; i <= 99; i++) {
  for (var j = 0; j <= 99; j++) {
    let pos = 0
    let input = JSON.parse(JSON.stringify(inputImmutable))

    input[1] = i
    input[2] = j

    while (input[pos] !== 99) {
      const opFn = OPCODES[input[pos]]
      const total = opFn(input[input[pos + 1]], input[input[pos + 2]])

      input[input[pos + 3]] = total
      pos += 4
    }

    if (input[0] === 19690720) {
      console.log(i, j)
      break;
    }
  }
}