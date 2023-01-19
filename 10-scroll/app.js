
window.addEventListener('DOMContentLoaded', () => {
    let nav = document.querySelector('.nav');
    nav.classList.add('nav_n')
})

window.addEventListener('scroll', function () {
    let nav = document.querySelector('.nav');
    nav.classList.toggle('nav_fix', window.scrollY > 0);

});

let menuIcon = document.querySelector('.menu_icon');
let menuMovil = document.querySelector('.menu_movil');

menuIcon.addEventListener('click', () => {
    menuMovil.classList.toggle('menu_movil_show')
});