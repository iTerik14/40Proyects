
const imgs = document.querySelectorAll('.slider_container img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let pos = 0;
let i = 0;

console.log(imgs[0]);

next.addEventListener('click', (e) => {
    pos += 100;
    console.log(pos);
    // imgs[i].style.transform = "translate(-" + pos + ")";
    if (i === 0) {
        prev.classList.toggle('toggle');
        i++;
    }
    console.log(i);
})





