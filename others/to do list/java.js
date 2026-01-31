let add
let input
let ul
let p
let li
let div
let popup
let popupInput
let popupBtn1
let popupBtn2
let popupInfo
let x

const main = () => {
  prepareDOMElements()
  prepareDOMEvents()
}

const prepareDOMElements = () => {
  add = document.querySelector('.btn-add')
  input = document.querySelector('.todo-input')
  ul = document.querySelector('ul')
  p = document.querySelector('.error-info')
  popup = document.querySelector('.popup')
  popupBtn1 = document.querySelector('.accept')
  popupBtn2 = document.querySelector('.cancel')
  popupInput = document.querySelector('.popup-input')
  popupInfo = document.querySelector('.popup-info')
}

const addToDo = () => {
  if (input.value == '') {
    p.textContent = 'Wpisz treść zadania.'
  } else {
    li = document.createElement('li')
    ul.append(li)
    li.textContent = input.value
    newTools()
    li.append(div)
    input.value = ''
    p.textContent = ''
  }
}

const newTools = () => {
  div = document.createElement('div')
  div.classList.add('tools')
  btn1 = document.createElement('button')
  btn2 = document.createElement('button')
  btn3 = document.createElement('button')
  btn1.classList.add('complete')
  btn2.classList.add('edit')
  btn2.textContent = 'EDIT'
  btn3.classList.add('delete')
  div.append(btn1, btn2, btn3)
  const icon1 = document.createElement('i')
  const icon2 = document.createElement('i')
  btn1.append(icon1)
  btn3.append(icon2)
  icon1.classList.add('fas')
  icon2.classList.add('fas')
  icon1.classList.add('fa-check')
  icon2.classList.add('fa-times')
}

const checkLi = e => {
  if (e.target.matches('.complete')) {
    e.target.closest('li').classList.toggle('completed')
    e.target.classList.toggle('completed')
  }
  else if (e.target.matches('.edit')) {
    popup.style.display = 'flex'
    x = e.target.closest('li')
    popupInput.value = x.firstChild.textContent
  }
  else if (e.target.matches('.delete')) {
    e.target.closest('li').remove()
    const allLi = document.querySelectorAll('li')
    if (allLi.length == 0) {
      p.textContent = 'Brak zadań na liście.'
    }
  }
}

const accept = () => {
  if (popupInput.value != '') {
    x.textContent = popupInput.value
    newTools()
    x.append(div)
    popup.style.display = 'none'
    popupInfo.textContent = ''
  } else {
    popupInfo.textContent = 'Wpisz treść zadania.'
  }
}

const cancel = () => {
  popup.style.display = 'none'
  popupInfo.textContent = ''
}

const prepareDOMEvents = () => {
  add.addEventListener('click', addToDo)
  input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      addToDo()
    }
  })
  ul.addEventListener('click', checkLi)
  popupBtn1.addEventListener('click', accept)
  popupBtn2.addEventListener('click', cancel)
}

document.addEventListener('DOMContentLoaded', main)
