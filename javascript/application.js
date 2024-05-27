// 2. Clear the display when clicking on 'C'
// 2.1 Define a clearDisplay function
const clearDisplay = () => {
  display.value = ''
}
// 3. Compute operations when clicking on '='

// 1. Write operations on the calculator
// 1.1 Create a selector for the display
const display = document.querySelector('input')

// 1.2 Create selectors for the buttons
const buttons = document.querySelectorAll('a')

// 1.3 Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault()

    if (button.innerText == 'C') {
      // 2.2 Call clearDisplay function
      clearDisplay()
    } else {
      // 1.4 Add clicked button content to the display
      display.value += button.innerText
    }
  })
})
