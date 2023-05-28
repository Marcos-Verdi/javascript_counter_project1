const decreaseButton = document.getElementById('decrease-btn')
const resetButton = document.getElementById('reset-btn')
const increaseButton = document.getElementById('increase-btn')
const countValue = document.getElementById('counter-value')
let count = 0

function setColor() {
    if (count > 0) {
        countValue.setAttribute('class','positive')
    } else if (count < 0) {
        countValue.setAttribute('class','negative')
    } else {
        countValue.setAttribute('class','counter-value')
    }
}


resetButton.addEventListener('click', () => {
    count = 0
    countValue.innerText = count
    countValue.setAttribute('class','counter-value')
})

increaseButton.addEventListener('click', () => {
    count += 1
    countValue.innerText = count
    setColor()
})

decreaseButton.addEventListener('click', () => {
    count -= 1
    countValue.innerText = count
    setColor()
})