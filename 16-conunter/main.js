const count1 = document.querySelector('.container1 .count__button');
const count2 = document.querySelector('.container2 .count__button');
console.log(count1);
console.log(count2);
let cont1 = 100;
let cont2 = 200;

count1.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    let num = document.querySelector('.container1 .count');
    if (e.target.textContent.trim() === "subir") {
        cont1++;
    } else if (e.target.textContent === "reset") {
        cont1 = 0;
    } else if (e.target.textContent === "bajar") {
        cont1--;
    }
    num.innerHTML = cont1
});

count2.addEventListener('click', (e) => {
    let num = document.querySelector('.container2 .count');
    if (e.target.textContent === "subir") {
        cont2++;
    } else if (e.target.textContent === "reset") {
        cont2 = 0;
    } else if (e.target.textContent === "bajar") {
        cont2--;
    }
    num.innerHTML = cont2;
});