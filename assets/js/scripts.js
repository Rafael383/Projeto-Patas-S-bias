const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const menuContainer = document.getElementById('menu-container');
const inputChekboxMenu = document.getElementById('checkbox');

const toggleMenuMobile = () => menuContainer.classList.toggle('height');

window.addEventListener('resize', () => {
    inputChekboxMenu.checked = false;

    menuContainer.classList.remove('height');
});


mobileMenuBtn.addEventListener("change", toggleMenuMobile);        
