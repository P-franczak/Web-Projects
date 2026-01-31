const burger = document.querySelector('.burger')
const ul = document.querySelector('ul')
const icon1 = document.querySelector('i + i')
const icon2 = document.querySelector('i')

const move = () => {
  ul.classList.toggle('active')
  burger.classList.toggle('active')
  icon1.classList.toggle('hide')
  icon2.classList.toggle('hide')
}

burger.addEventListener('click', move)
