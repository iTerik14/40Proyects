let restar = document.getElementById('restar');
let reset = document.getElementById('reset');
let sumar = document.getElementById('sumar');
let counter = document.getElementById('counter');
let num = 0;

restar.addEventListener('click',()=>{
    counter.textContent = --num;
    if(num<0){
        counter.style.color = "rgb(230, 30, 30)"
    }else if(num===0){
        counter.style.color = "black"
    }
})

sumar.addEventListener('click',()=>{
    counter.textContent = ++num;
    if(num>0){
        counter.style.color = "rgb(78, 189, 15)"
    }else if(num===0){
        counter.style.color = "black"
    }
    
})

reset.addEventListener('click',()=>{
    counter.textContent = 0;
    num=0;
    counter.style.color = "black"
})