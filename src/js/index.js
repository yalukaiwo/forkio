const burgerButton = document.querySelector(".header__burger")
const menu = document.querySelector(".header__burger-content") 
const body = document.querySelector("body")


burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("burger--active")
    menu.classList.toggle("header__burger-content--active")
})

body.addEventListener("click", (e) => {
    if (!e.target.classList.contains("burger") && !e.target.classList.contains("burger-menu__item") && !e.target.classList.contains("burger-menu__item-holder") && !e.target.classList.contains("burger__middle") && !e.target.classList.contains("burger__bottom") && !e.target.classList.contains("burger__top")) {
        burgerButton.classList.remove("burger--active")
        menu.classList.remove("header__burger-content--active") 
    }
})