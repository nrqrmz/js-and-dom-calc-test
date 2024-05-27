// 1. Write operations on the calculator

// 2. Clear the display when clicking on 'C'
// 3. Compute operations when clicking on '='

// 1.1 Create a selector for the display
const display = document.querySelector('input')

// 1.2 Create selectors for the buttons
const buttons = document.querySelectorAll('a')

// 1.3 Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault()

    // 1.4 Add clicked button content to the display
    display.value += button.innerText
  })
})
