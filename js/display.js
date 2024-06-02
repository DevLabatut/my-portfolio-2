document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".dd-demo");
  var overlay2 = document.getElementById("overlay-2");
  var popup2 = document.getElementById("popup-2");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      overlay2.style.display = "block";
      popup2.style.display = "block";
      document.body.classList.add("no-scroll"); // Adiciona a classe para desabilitar a rolagem
    });
  });

  overlay2.addEventListener("click", function () {
    overlay2.style.display = "none";
    popup2.style.display = "none";
    document.body.classList.remove("no-scroll"); // Remove a classe para habilitar a rolagem
  });
});
