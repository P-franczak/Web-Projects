const btn1 = document.querySelector('.conv')
const btn2 = document.querySelector('.reset')
const btn3 = document.querySelector('.change')
const input = document.querySelector('#converter')
const p = document.querySelector('p')
const span1 = document.querySelector('.one')
const span2 = document.querySelector('.two')


const conv = () => {
  if (input.value == '') {
    return
  }
  if (!(p.classList == 'result F')) {
    let x = input.value * 1.8 + 32
    p.textContent = `${input.value}°C to ${x.toFixed(1)}°F`
  }
  if (p.classList == 'result F') {
    let x = (input.value - 32) / 1.8
    p.textContent = `${input.value}°F to ${x.toFixed(1)}°C`
  }
  input.value = ''
}

const reset = () => {
  p.textContent = ''
  input.value = ''
}

const change = () => {
  p.classList.toggle('F')
  p.textContent = ''
  if (p.classList == 'result F') {
    span1.textContent = '°F'
    span2.textContent = '°C'
  } else {
    span1.textContent = '°C'
    span2.textContent = '°F'
  }
}


btn1.addEventListener('click', conv)
btn2.addEventListener('click', reset)
btn3.addEventListener('click', change)
