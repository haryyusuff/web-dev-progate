const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number) => {
    calculatorScreen.value = number 
}
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}
const numbers = document.querySelectorAll(".number")

numbers.forEach ((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber)
    })
})

const oeprators = document.querySelectorAll(".operator")

oeprators.forEach((operator) => {
    operatort.addEventListener("click", (event) => {
        
    })
})
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'
