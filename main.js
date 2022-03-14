const iconMenuMobile = document.querySelector('.icon-hamburguer')
const menuMobile = document.querySelector('nav')

iconMenuMobile.addEventListener('click', () => {
  menuMobile.classList.toggle('active')
})