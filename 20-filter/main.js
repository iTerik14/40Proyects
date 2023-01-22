// let search = document.querySelector('.search');
let menu = document.querySelector('.menu');
let template = document.querySelector('#template').content.querySelector('.product_container');
let containerProducto = document.querySelector('.main_products')


let cat = "all";

// let datos = null;

const fetchData = async () => {
    try {
        const res = await fetch("productos.json");
        const data = await res.json();
        // datos = data;
        mostrarProductos(data);
        pintarProduct(data);
        searchCon(data);
    } catch (error) {
        console.log(error);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});


// console.log(datos);

function searchCon(data) {
    const form = document.querySelector('form search');
    const search = document.querySelector('.search');
    form.addEventListener('keyup', () => {
        const inputValue = search.value;
        filteredProducts = data.filter((product) => {
            return product.title.toLowerCase().includes(inputValue);
        });
        mostrarProductos(filteredProducts)
    });
}

function mostrarProductos(data) {
    menu.addEventListener('click', (e) => {
        let cat = e.target.dataset.fill;
        if (cat !== "all") {
            // limpiarContainer();
            let newData = filtro(data, cat);
            limpiarContainer();
            pintarProduct(newData);
            return
        }
        limpiarContainer();
        pintarProduct(data);

    });

}

function pintarProduct(data) {
    let fragment = new DocumentFragment();
    data.forEach(elem => {
        template.querySelector('.product__img img').src = elem.image;
        template.querySelector('.title').innerHTML = elem.title;
        template.querySelector('.price').innerHTML = elem.price;

        let clon = template.cloneNode(true);
        fragment.append(clon);
    });
    containerProducto.append(fragment);
}

function filtro(data, cat) {
    let newArr = data.filter(elem => elem.company === cat);
    return newArr;
}

function limpiarContainer() {
    containerProducto.textContent = "";
}



