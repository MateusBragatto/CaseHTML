const btnMobile = document.getElementById('menu_mobile');
function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click',toggleMenu);