let tog = document.querySelector('.toggle');
let men = document.querySelector('.menu');


tog.addEventListener('click', () => {
    tog.classList.toggle('rotate');
    men.classList.toggle('active');
})