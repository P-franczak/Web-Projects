const btn = document.querySelector('.arrow')
const icon = document.querySelector('.fas')
const img = document.querySelector('.item1')

const hide = () => {
  img.classList.toggle('hide')
  icon.classList.toggle('rotate')
}

btn.addEventListener('click', hide)
