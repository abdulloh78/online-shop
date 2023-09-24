let cart_items_count = document.querySelector('.cart-amount')
let add_to_cart_buttons = document.querySelectorAll('.btn-12')
for (let i = 0; i < add_to_cart_buttons.length; i += 1){
    add_to_cart_buttons[i].addEventListener('click', function() {
        cart_items_count.innerHTML = +cart_items_count.innerHTML  + 1
    })
}
let block = document.querySelector('.block')
document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let angleX = 20 * dx / window.innerWidth / 2
    let angleY = 20 * dy / window.innerHeight / 2
    block.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
})
