const btn1 = document.querySelector('.sizeUp')
const btn2 = document.querySelector('.sizeDown')
const btn3 = document.querySelector('.color')
const p = document.querySelector('p')

let x = 36
const sizeUp = () => {
  if (x < 56) {
    x += 4
  }
  p.style.fontSize = `${x}px`
}
const sizeDown = () => {
  if (x > 20) {
    x -= 4
  }
  p.style.fontSize = `${x}px`
}
const sizeColor = () => {
  let number1 = Math.floor(Math.random()*255)
  let number2 = Math.floor(Math.random()*255)
  let number3 = Math.floor(Math.random()*255)
  p.style.color = `rgb(${number1}, ${number2}, ${number3})`
}

btn1.addEventListener('click', sizeUp)
btn2.addEventListener('click', sizeDown)
btn3.addEventListener('click', sizeColor)
