const dataBible = async () => {
    try {
        const libros = await fetch("https://www.abibliadigital.com.br/api/books");
        let datosLibro = await libros.json();

        pintarVerso(datosLibro);

    } catch (error) {
        console.log(error);
    }
}

dataBible();

function capAleatorios(ca) {
    return Math.round(Math.random() * ca);
}

function libroAleatorio(data) {
    let random = Math.round(Math.random() * 65);
    let datoran = data[random];
    return datoran
}

const frase = document.querySelector('.frase');
const verso = document.querySelector('.verso');


async function pintarVerso(datosLibro) {
    const boton = document.querySelector('.boton');
    boton.addEventListener('click', async () => {
        let libroAl = libroAleatorio(datosLibro);
        console.log(libroAl);

        let abrev = libroAl.abbrev.pt;

        let cap = capAleatorios(libroAl.chapters);
        let biblia = await fetch(`https://www.abibliadigital.com.br/api/verses/rvr/${abrev}/${cap}`);

        let data = await biblia.json();
        console.log(data);
        let ver = data.chapter.verses - 1;
        let versoAl = Math.round(Math.random() * ver);
        console.log(data.verses);
        frase.innerHTML = data.verses[versoAl].text;
        verso.innerHTML = `${data.book.name} ${data.chapter.number}:${versoAl}`
    })

}