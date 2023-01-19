const sec = document.querySelector('.sec span');
const work = document.querySelector('.work span');
const happ = document.querySelector('.happ span');

let s = 1, w = 1, h = 1;
let i = 1

function inter(time, elem) {
    setInterval(() => {
        if (i < time) {
            i++;
            elem.innerHTML = i + "+";
        } else {
            return
        }
    },100)
}

setInterval(() => {
    inter(500, sec);
    inter(17140, work);
    inter(1500, happ)
}, 100);
