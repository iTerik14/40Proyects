

window.addEventListener('scroll', function () {
    let nav = document.querySelector('.nav');
    nav.classList.toggle('nav_fix', window.scrollY>0);

})