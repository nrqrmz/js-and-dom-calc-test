### Solution with pseudocode

```javascript
// 1. Write operations on the calculator
// 1.1 Create a selector for the display
const display = document.querySelector('input')

// 1.2 Create selectors for the buttons
const buttons = document.querySelectorAll('a')

// 2. Clear the display when clicking on 'C'
// 2.1 Define a clearDisplay function
const clearDisplay = () => display.value = ''

// 3. Compute operations when clicking on '='
// 3.2 Retrieve the operator contained in the operation
const findOperator = str => str.match(/\d+([+\-*\/])\d+/)[1]

// 3.3 Performed the right operation according to the operator
// 3.3.1 Split the operation in terms based on the operator
const splitTerms = (str) => {
  const operator = findOperator(str)
  const stringTerms = str.split(operator)
  return [parseInt(stringTerms[0], 10), parseInt(stringTerms[1], 10)]
}

// 3.3.2 Calculate the operation based on the operator
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

// 1.3 Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault()

    if (button.innerText == 'C') {
      // 2.2 Call clearDisplay function
      clearDisplay()
    // 3.1 Check if the '=' button was clicked
    } else if (button.innerText == '=') {
      display.value = calculate(display.value)
    } else {
      // 1.4 Add clicked button content to the display
      display.value += button.innerText
    }
  })
})
```

### import math.js
```html
<head>
  <!-- import math.js in the last line of the head -->
  <script src="https://unpkg.com/mathjs/lib/browser/math.js"></script>
</head>
```

### refactor solution using math.js
```javascript
const mathJSCalculate = str => math.evaluate(str)

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault()

    if (button.innerText == 'C') {
      clearDisplay()
    } else if (button.innerText == '=') {
      display.value = mathJSCalculate(display.value)
    } else {
      display.value += button.innerText
    }
  })
})
```
