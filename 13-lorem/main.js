
let btnGen = document.querySelector('.generate button');
let lorems = document.querySelectorAll('.lorem');
let number = document.querySelector('.generate input');


btnGen.addEventListener('click', () => {
    let num = number.value;
    console.log(num);
    if (num > 9) num = 1;

    lorems.forEach((elem)=>{
        if(elem.classList.contains("show_lorem")){
            elem.classList.remove("show_lorem");
        }
    })

    for (let i = 0; i < num; i++) {
        lorems[i].classList.toggle('show_lorem')
    }

})


