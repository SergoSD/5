const btn = document.querySelector('.btn')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

btn.addEventListener('click', calc)

function calc() {
    value1 = Number(input1.value)
    value2 = Number(input2.value)

    if (act.value == '+') {
        res = value1 + value2
    }
    if (act.value == '-') {
        res = value1 - value2
    }
    if (act.value == '*') {
        res = value1 * value2
    }
    if (act.value == '/') {
        res = value1 / value2
    }

    result.innerHTML = res
}
