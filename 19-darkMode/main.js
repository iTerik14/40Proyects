let darkBtn = document.querySelector('.nav button');
console.log(darkBtn);

darkBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark_mode')
});