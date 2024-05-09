const btn = document.getElementById("menuBurger")
const burger = document.querySelector(".menu_burger")

let open = false
btn.addEventListener("click", function () {
    if (open === false) {
        burger.style.display = "none"
    }else{
        burger.style.display = "flex"
    }
    open = !open
})