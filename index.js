const menuBurgerBtn = document.getElementById("menuBurger")
const burger = document.querySelector(".menu_burger")

let open = false
menuBurgerBtn.addEventListener("click", function () {
    if (open === false) {
        burger.style.display = "none"
    }else{
        burger.style.display = "flex"
    }
    open = !open
})

const backIcon = document.querySelector("#arrow-left")

backIcon.addEventListener("click", function () {
   history.back()
})


const createContactBtn = document.querySelector(".create_contact")
const menuContact = document.querySelector(".main")
const saveContact = document.querySelector(".save_contacts")

createContactBtn.addEventListener("click", function () {
   menuContact.style.display = "none"
   saveContact.style.display = "block"
})

const contactList = document.querySelector(".contactList")

contactList.addEventListener("click", function () {
    self.location = "./index.html"
})

const indicator = document.querySelector(".navIndicator")
const items = document.querySelectorAll(".item")

function handleIndicator(el) {
    items.forEach(item => {
        item.classList.remove("active")
        item.removeAttribute('style')
    })
    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.left = `${el.offsetLeft}px`;

    el.classList.add('active');
    el.style.background = "#04abff75";
}

items.forEach((item, index) => {
    item.addEventListener('click', function (e) {
        handleIndicator(e.target)
    });
    item.classList.contains('active') && handleIndicator(item)
});


const Contact = dcreateElement('div',{
    className: "newContact"
})



