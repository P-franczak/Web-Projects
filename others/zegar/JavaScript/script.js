const clock = document.querySelector('.clock')

const changeDate = () => {
	const today = new Date()
	const day = today.getDate()
	const month = today.getMonth() + 1
	const year = today.getFullYear()
	let hour = today.getHours()
	if (hour < 10) {
		hour = '0' + hour
	}
	let minute = today.getMinutes()
	if (minute < 10) {
		minute = '0' + minute
	}
	let second = today.getSeconds()
	if (second < 10) {
		second = '0' + second
	}
	clock.textContent = `${day}/${month}/${year} | ${hour}:${minute}:${second}`
	setTimeout('changeDate()', 1000)
}
changeDate()
