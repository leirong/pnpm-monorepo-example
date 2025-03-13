function add(a: number, b: number) {
  console.log('a + b = ', a + b)
  return a + b
}

function subtract(a: number, b: number) {
  console.log('a - b = ', a - b)
  return a - b
}

function divide(a: number, b: number) {
  return a / b
}

function multiply(a: number, b: number) {
  return a * b
}

function mod(a: number, b: number) {
  return a % b
}

export { add, subtract, divide, multiply, mod }
