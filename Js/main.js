const BtnMenu = document.querySelector(".Btm_menu");
const Menu = document.querySelector(".nav")
BtnMenu.addEventListener("click", () => {
    BtnMenu.classList.toggle("Close_btn");
    Menu.classList.toggle("Open_nav")
})