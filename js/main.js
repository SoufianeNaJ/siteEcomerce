/* open x close Cart */

var cart = document.querySelector('.cart');

function open_cart(){
    cart.classList.add('active');
}

function close_cart(){
    cart.classList.remove('active');
}
/* open x close menu */

var menu = document.querySelector('#menu');

function open_menu(){
    menu.classList.add('active');
}

function close_menu(){
    menu.classList.remove('active');
}

let bigImag = document.getElementById('bigImag');
function ChangeItemimage(img) {
    bigImag.src = img
}



/* add items in cart */

var all_products_json;
var Items_in_cart = document.querySelector('.Items_in_cart');
let product_cart = [];

function addtoCart(id, btn) {
    product_cart.push(all_products_json[id])
    btn.classList.add('active')
    getCartitems()
}

let count_items = document.querySelector('.count_items');
let count_items_cart = document.querySelector('.count_items_cart');
let price_cart_total = document.querySelector('.price_cart_total');
let price_cart_Head = document.querySelector('.price_cart_Head');

function getCartitems() {
    let total_price = 0;
    
    let items_c = "";
    for (let i = 0; i < product_cart.length; i++) {
        items_c += `
        <div class="item_cart">
            <img src="${product_cart[i].img}">
            <div class="content">
                <h4>${product_cart[i].name}</h4>
                    <p class="price_cart">$${product_cart[i].price}</p>
            </div>
            <button onclick="remove_from_cart(${i})" class="delete_item"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        `
        total_price += product_cart[i].price
    }
    Items_in_cart.innerHTML = items_c
    price_cart_Head.innerHTML = "$"+total_price
    count_items.innerHTML = product_cart.length

    count_items_cart.innerHTML = `(${product_cart.length}Item in Cart)`
    price_cart_total.innerHTML = "$"+total_price
}

function remove_from_cart(index) {
    product_cart.splice(index, 1)
    getCartitems()
    let addToCartbutton = document.querySelectorAll('.fa-cart-plus');
for (let i = 0; i < addToCartbutton.length; i++) {
    addToCartbutton[i].classList.remove("active")
    product_cart.forEach(product => {
        if(product.id == i){
            addToCartbutton[i].classList.add("active")
        }
    });
}
}

let back_to_top = document.querySelector('.back_to_top')

back_to_top.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})


