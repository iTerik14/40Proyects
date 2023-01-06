const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const btn = card.querySelector(".card-simbol");
  const bthAdd = btn.querySelector(".button-add");
  const bthMen = btn.querySelector(".button-menus");
  const footer = card.querySelector(".footer-card");

  btn.addEventListener("click", () => {
    cards.forEach((item) => {
      if (item !== card) {
        item.classList.remove("show-text");
      }
    });

    footer.classList.toggle("show-text");
  });
});
