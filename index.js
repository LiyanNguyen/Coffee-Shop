//======= SIDEBAR CART AND MENU FUNCTION =======//
let navbar = document.querySelector(".navbar");
let menuButton = document.querySelector("#menu-btn");
let cartButton = document.querySelector("#cart-btn");
let cartItemContainer = document.querySelector(".cart-menu");

// toggle the menu sidebar and remove cart sidebar
menuButton.onclick = () => {
  navbar.classList.toggle("active");
  cartItemContainer.classList.remove("active");
};

//toggle the cart sidebar and remove menu sidebar
cartButton.onclick = () => {
  cartItemContainer.classList.toggle("active");
  navbar.classList.remove("active");
};

//======= BACK TO TOP FUNCTION =======//
let ViewportHeight = window.innerHeight; //get the viewport height of device
let toTopButton = document.querySelector(".to-top"); //get to back to top button

//show the back to top button when user scroll down half the size of viewport
window.addEventListener("scroll", () => {
  if (window.pageYOffset > ViewportHeight / 2) {
    toTopButton.classList.add("active");
  } else {
    toTopButton.classList.remove("active");
  }
});

//======= MENU SCROLLSPY =======//
let section = document.querySelectorAll("section"); // get all sections
let menuLinks = document.querySelectorAll(".navbar-link"); // get all sidebar menu links
let sectionHeight = document.querySelector("section").offsetHeight; // get the height of the top menu
let sectionStartingPointArray = []; // array to store the top-most pixel points of each section
let menuLinksArray = []; // array to store the menu elements

// for every section we store their top-most pixel point into an array
section.forEach((sec) => {
  sectionStartingPointArray.push(sec.offsetTop);
});

// for every menu link element we store them in an array
menuLinks.forEach((menuLink) => {
  menuLinksArray.push(menuLink);
});

// call this function everytime we scroll on the browser window
window.onscroll = () => {
  // remove either cart or menu sidebar if they are open on scroll
  navbar.classList.remove("active");
  cartItemContainer.classList.remove("active");

  // amount of pixel we have scrolled downwards from the top-most point of the web page
  let downwardScroll = window.scrollY;

  // for every <section>'s top-most point
  sectionStartingPointArray.forEach((sectionStart, sectionIndex) => {
    // check if the current downward scroll is on the middle of each <section>
    // by using its top-most point minus its height divide by half
    if (downwardScroll >= sectionStart - sectionHeight / 2) {
      //if so, we remove all the 'active' classes on all menu links
      menuLinksArray.forEach((menu) => {
        menu.classList.remove("active");
      });
      //then add the 'active' class on the corresponding menu depending on which section the scroll is currently at
      menuLinksArray[sectionIndex].classList.add("active");
    }
  });
};

//======= FUNCTION TO PLAY LOADING ANIMATION =======//
let checkIfDocumentFullyLoaded = () => {
  if (document.readyState === "complete") {
    // remove the loading screen
    document.querySelector(".loader").classList.add("load-off");
    // enable scroll after full page load
    document.querySelector(":root").style.setProperty("--oflow", "none");
    // remove the interval call to this function
    clearInterval(checkPageLoad);
  }
};
let checkPageLoad = setInterval(checkIfDocumentFullyLoaded, 100);
