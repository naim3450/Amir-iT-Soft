import products from './Templet.json'
import { showProductContainer } from './showProductContainer'
import { samllCart } from './smallCart'
import { updateCartValue } from './updateCartValue'

let menu = false

let bars = document.querySelector('.bars')
let small = document.querySelector('.small')

bars.addEventListener('click', () => {
    menu = !menu
    if (menu == true) {
        bars.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        small.style.display = `block`
        small.classList.add('animationCart2')
    } else {
        bars.innerHTML = `<i class="fa-solid fa-bars"></i>`
        small.style.display = `none`
    }
})

updateCartValue()
showProductContainer(products)
samllCart()