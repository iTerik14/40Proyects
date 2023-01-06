const cards = document.querySelectorAll(".cards");

cards.forEach((card) => {
  let btn = card.querySelector(".pregunta_btn");

  btn.addEventListener("click", () => {
    quitarRespuestas();
    let respuesta = card.querySelector(".respuesta");
    respuesta.classList.toggle("show-answer");
  });
});

function quitarRespuestas() {
  cards.forEach((card) => {
    let respuesta = card.querySelector(".respuesta");
    respuesta.classList.remove("show-answer");
  });
}
