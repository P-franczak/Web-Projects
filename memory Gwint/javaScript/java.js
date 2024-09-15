const board = document.querySelector('.board')
const turn = document.querySelector('span')
const card = document.querySelectorAll('.card')
const win = document.querySelector('.win')
let a = new Array(12)
let i = 0
let x = 0
let scr = 0
let imgID
let imgSRC
let divID
turn.textContent = 1

cards = ['img/ciri.png', 'img/geralt.png', 'img/iorweth.png', 'img/jaskier.png', 'img/triss.png', 'img/yen.png']

function sleep(milliseconds) {
	const date = Date.now()
	let currentDate = null
	do {
		currentDate = Date.now()
	} while (currentDate - date < milliseconds)
}

function losuj2() {
	let n = 12
	let numbers = new Array(n)
	for (let i = 0; i < 12; i++) {
		if (i % 2 == 0) {
			numbers[i] = i / 2
		} else if (i % 2 == 1) {
			numbers[i] = numbers[i - 1]
		}
	}
	for (let i = 0; i < 12; i++) {
		let r = Math.floor(Math.random() * n)
		a[i] = numbers[r]
		numbers[r] = numbers[n - 1]
		n--
	}
}
losuj2()

for (const div of card) {
	const img = document.createElement('img')
	div.append(img)
	img.setAttribute('src', cards[a[i]])
	img.setAttribute('alt', 'zdjęcie')
	img.setAttribute('class', 'hidden')
	i++
	div.addEventListener('click', function () {
		if (x == 0) {
			img.classList.remove('hidden')
			div.classList.add('active')
			x = 1
			imgID = img
			imgSRC = img.getAttribute('src')
			divID = div
		} else if (x == 1) {
			img.classList.remove('hidden')
			div.classList.add('active')
			x = 2
			if (imgSRC === img.getAttribute('src')) {
				setTimeout(function () {
					div.classList.add('ghost')
					divID.classList.add('ghost')
					div.classList.remove('active')
					divID.classList.remove('active')
					scr++
					if (scr == 6) {
						win.classList.remove('ghost')
					}
					x = 0
				}, 1000)
			} else {
				setTimeout(function () {
					img.classList.add('hidden')
					imgID.classList.add('hidden')
					div.classList.remove('active')
					divID.classList.remove('active')
					x = 0
				}, 1000)
			}
			turn.textContent++
		}
	})
}
