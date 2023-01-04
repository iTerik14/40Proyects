//captura de elementos
let name = document.querySelector(".name");
let perfilImg = document.querySelector(".perfil img");
let cargo = document.querySelector(".cargo");
let descripcion = document.querySelector(".description");
let btnIzq = document.querySelector('#izq');
let btnDer = document.querySelector('#der');
let clic = document.getElementById('boton')

const persona = [
    {
        id: 1,
        img: "img01.jpg",
        name: "Erik Huayllas",
        cargo: "Front End",
        descripcion: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id: 2,
        img: "img02.jpg",
        name: "Tatiana Vila",
        cargo: "Engineer Chemistry",
        descripcion: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        id: 3,
        img: "img03.jpg",
        name: "Daina Huayllas",
        cargo: "Marketing",
        descripcion: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        id: 4,
        img: "img03.jpg",
        name: "Fidel Huayllas",
        cargo: "Apicultor",
        descripcion: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    }
]

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    const item = persona[currentItem];
    perfilImg.src = item.img;
    name.textContent = item.name;
    cargo.textContent = item.cargo;
    descripcion.textContent = item.descripcion;
});

function mostrarDatos(i) {
    perfilImg.src = persona[i].img;
    name.innerHTML = persona[i].name;
    cargo.innerHTML = persona[i].cargo;
    descripcion.innerHTML = persona[i].descripcion;
}


const recorridoEventIzq = () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = persona.length - 1;
    }
    mostrarDatos(currentItem);
}

const recorridoEventDer = () => {
    if (currentItem > persona.length - 1) {
        currentItem = 0;
    }
    mostrarDatos(currentItem);
    currentItem++;
}

btnIzq.addEventListener("click", recorridoEventIzq);
btnDer.addEventListener("click", recorridoEventDer);

clic.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * persona.length);
    mostrarDatos(currentItem);
});








