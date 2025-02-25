document.addEventListener('DOMContentLoaded', function () {
	const projectLinks = document.querySelectorAll('#project-list a')

	projectLinks.forEach(link => {
		link.addEventListener('mouseover', () => {
			link.style.transform = 'scale(1.05)'
		})
		link.addEventListener('mouseout', () => {
			link.style.transform = 'scale(1)'
		})
	})
})
