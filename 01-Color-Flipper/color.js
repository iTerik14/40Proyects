let boton = document.getElementById('boton');
let hexa = document.getElementById('hex');
let conten = document.querySelector('.main')


const colores = ['blue','red','yellow','green','orange'];

const Hexa = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

boton.addEventListener("click",()=>{
    let colH = colorsHexa();
    hexa.textContent = colH;
    document.body.style.backgroundColor = colH;
    
});
/*
setInterval(()=>{
    let col = colors();
    let colH = colorsHexa();
    hexa.textContent = colH;
    document.body.style.backgroundColor = colH;
},500);
*/
const colors = () =>{
    let rand = Math.floor(Math.random()*colores.length);
    return colores[rand];
}

const colorsHexa = () =>{
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += Hexa[Math.floor(Math.random()*Hexa.length)];
    }
    return color;
}
