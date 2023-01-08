const categorias = document.querySelectorAll(".nav-categorias");
const templateCat = document.getElementById("template-categoria").content;
// console.log(templateCat);
const containerCat = document.querySelector(".container_categorias");
// const fragment = document.createDocumentFragment();
// let categoriaActiva = null;

const allCategorias = document.querySelector(".all-categorys");

const fetchData = async () => {
	try {
		const res = await fetch("comidas.json");
		const data = await res.json();
		filtro(data);
		pintarTodo(data);
	} catch (error) {
		console.log(error);
	}
}; 

document.addEventListener("DOMContentLoaded", () => {
	fetchData();
});


//acceder a JSON ycapturarlo


// navegacion de la pagina
// dataCategory = categorias[0].dataset.categoria;

const quitarActivoNav = function () {
	categorias.forEach((categoria) => {
		categoria.classList.remove("nav_activo");
	});
};

categorias.forEach((categoria) => {
	categoria.addEventListener("click", (e) => {
		quitarActivoNav();
		e.currentTarget.classList.add("nav_activo");
		//activar filtro
	});
});

const filtro = function (data) {
	categorias.forEach((item) => {
		// quitarCategorias();
		item.addEventListener("click", () => {
			categoriaActiva = item.dataset.categoria;
			//   console.log(data[categoriaActiva]);

			if (categoriaActiva !== "all") {
				limpiarCategorias();
				pintarCategoria(data[categoriaActiva]);
			}
		});
	});
};

const pintarCategoria = function (categ) {
	let fragment = new DocumentFragment();
	//   console.log(categ);
	categ.forEach((producto) => {
		templateCat.querySelector("h2").innerHTML = producto.name;
		templateCat.querySelector(".content_price").textContent = producto.price;
		templateCat.querySelector(".box_content-description").textContent = producto.descriptions;
		templateCat.querySelector(".box_img img").src = producto.img;

		let clone = templateCat.cloneNode(true);

		fragment.append(clone);
	});

	containerCat.append(fragment);
};

const limpiarCategorias = function () {
	let categoriasCat = document.querySelectorAll(".categoria");
	categoriasCat.forEach((elem) => {
		elem.remove();
	});
};

function pintarTodo(data) {
	allCategorias.addEventListener("click", () => {
		limpiarCategorias();
		categorias.forEach((categ) => {
			if (categ.dataset.categoria !== "all") {
				pintarCategoria(data[categ.dataset.categoria]);
			}
		})
	});
};
