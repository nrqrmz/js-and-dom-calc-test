const display = document.querySelector('input')
const buttons = document.querySelectorAll('a')

const clearDisplay = () => display.value = ''

const findOperator = str => str.match(/\d+([+\-*\/])\d+/)[1]

const splitTerms = (str) => {
  const operator = findOperator(str)
  const stringTerms = str.split(operator)
  return [parseInt(stringTerms[0], 10), parseInt(stringTerms[1], 10)]
}

const calculate = (str) => {
  const operator = findOperator(str)
  const a = splitTerms(str)[0]
  const b = splitTerms(str)[1]

  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
  }
}

const mathJSCalculate = str => math.evaluate(str)

const removeLast = (str) => {
  return str.slice(0, str.length - 1)
}

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault()

    if (button.innerText == 'C') {
      clearDisplay()
    } else if (button.innerText == '←') {
      display.value = removeLast(display.value)
    } else if (button.innerText == '=') {
      display.value = mathJSCalculate(display.value)
    } else {
      display.value += button.innerText
    }
  })
})
