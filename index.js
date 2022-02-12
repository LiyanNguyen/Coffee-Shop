let navbar = document.querySelector('.navbar');
let menuButton = document.querySelector("#menu-btn");
let cartButton = document.querySelector('#cart-btn');
let cartItemContainer = document.querySelector(".cart-items-container");
	
// toggle the menu sidebar and remove cart sidebar
menuButton.onclick = () => {
  navbar.classList.toggle("active");
  cartItem.classList.remove("active");
};

//toggle the cart sidebar and remove menu sidebar
cartButton.onclick = () => {
  cartItemContainer.classList.toggle("active");
  navbar.classList.remove("active");
};

// remove either cart or menu sidebar if they are open on scroll
window.onscroll = () =>{
	navbar.classList.remove('active');
	cartItemContainer.classList.remove('active');
}