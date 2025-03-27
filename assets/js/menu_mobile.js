const btn_menu = document.getElementById("btn_mobile");



function toggleMenu(event){
    if(event.type === "touchstart") event.preventDefault();
    
    const image = document.getElementById("menu_abrir");
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        image.src = "assets/images/icone/fechar-menu.svg";
    }else{
        image.src = "assets/images/icone/menu-hamburguer.svg";
    }
}

btn_menu.addEventListener("click", toggleMenu);
btn_menu.addEventListener("touchstart", toggleMenu);


