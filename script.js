let cart_items_count = document.querySelector('.cart-amount')
let add_to_cart_buttons = document.querySelectorAll('.btn-12')
for (let i = 0; i < add_to_cart_buttons.length; i += 1){
    add_to_cart_buttons[i].addEventListener('click', function() {
        cart_items_count.innerHTML = +cart_items_count.innerHTML  + 1
    })
}
