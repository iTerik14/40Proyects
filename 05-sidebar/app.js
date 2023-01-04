const simbol = document.querySelector('.simbol');
const men = document.querySelector('.men');
const aside = document.querySelector('.aside-container');


men.addEventListener('click', () => {

    if (aside.classList.contains('show-container')) {
        aside.classList.remove('show-container');
    } else {
        aside.classList.add('show-container');
    }


});

simbol.addEventListener("click", ()=> {
    aside.classList.remove("show-container");
});