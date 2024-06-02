const abrirBtn = document.getElementById("abrir");
const overlay1 = document.getElementById("overlay-1");
const popup1 = document.getElementById("popup-1");
const iconFecharMenu = document.getElementById("fechar");
const itensMenu = document.querySelectorAll("#popup-1 li a");

abrirBtn.addEventListener("click", function () {
  overlay1.style.display = "block";
  popup1.style.display = "block";
  document.body.classList.add("no-scroll");
});

iconFecharMenu.addEventListener("click", function () {
  overlay1.style.display = "none";
  popup1.style.display = "none";
  document.body.classList.remove("no-scroll");
});

itensMenu.forEach(function (item) {
  item.addEventListener("click", function () {
    overlay1.style.display = "none";
    popup1.style.display = "none";
    document.body.classList.remove("no-scroll");
  });
});
