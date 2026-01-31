const burgerBtn = document.querySelector('.burger-btn')
const navItems = document.querySelector('.nav-items')

const handleMobileNav = () => {
    navItems.classList.toggle('active')
    document.body.classList.toggle('sticky-body')
}

burgerBtn.addEventListener('click', handleMobileNav)
