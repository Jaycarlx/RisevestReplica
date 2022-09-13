// Add Shadow to nav bar as user scrolls
window.addEventListener("scroll", (e) => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 10) {
        nav.classList.add("add-shadow")
    } else {
        nav.classList.remove("add-shadow")
    }
});


// Mobile Navigator
const navBtn = document.querySelector(".navBtn");
const mobileNav = document.querySelector("#navigator");
const navBtnImg = document.querySelector(".navBtn img")

navBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("hide")
    
    if (mobileNav.classList.contains("hide")) {
        navBtnImg.src = "./img/navbtn.svg"
    } else {
        navBtnImg.src = "./img/cancel-nav.svg"
    }
})


//Dropdown NAv bar
const products = document.querySelector("nav .navbar li");
const list = document.querySelector("nav .navbar ul")
products.addEventListener("click", () => {
    list.classList.toggle("remove")
    event.preventDefault()
});

// Dropdown nav bar for mobile
const mobProducts = document.querySelector(".mobile-links li");
const mobList = document.querySelector(".mobile-links ul")
mobProducts.addEventListener("click", () => {
    mobList.classList.toggle("remove")
    event.preventDefault()
});
