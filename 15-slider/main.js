
const imgs = document.querySelector('.slider');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const naveg = document.querySelector('.naveg');
let pos = 0;

let cont = imgs.childElementCount * 100 - 100;

naveg.addEventListener('click', (e) => {

    if (e.target.textContent === "Prev") {
        if (pos === 0) {
            imgs.style.transition = ``;
            imgs.style.transform = `translateX(-${cont}%)`;
            pos = cont;
        } else {
            pos -= 100;
            imgs.style.transform = `translateX(-${pos}%)`;
            imgs.style.transition = `transform 1s`;
        }
        console.log(pos);
    }


    if (e.target.textContent === "Next") {
        pos += 100;
        imgs.style.transform = `translateX(-${pos}%)`;
        imgs.style.transition = `transform 1s`;
        if (pos > cont) {
            imgs.style.transform = `translateX(0)`;
            imgs.style.transition = ``;
            pos = 0;
        }
        console.log(pos);
    }
})






