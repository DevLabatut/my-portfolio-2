document.addEventListener("DOMContentLoaded", function () {
  const abrirBtn = document.getElementById("abrir");
  const overlay = document.getElementById("overlay");
  const popup1 = document.getElementById("popup-1");
  const popup2 = document.getElementById("popup-2");
  const itensMenu = document.querySelectorAll("#popup-1 li a");
  const buttons = document.querySelectorAll(".dd-demo");

  // Função para exibir/ocultar overlay e popup com efeito de transição suave
  function togglePopupDisplay(overlay, popup, action) {
    if (action === "block") {
      overlay.style.opacity = "0";
      overlay.style.display = "block";
      popup.style.opacity = "0";
      popup.style.display = "block";

      // Gradualmente aumentar a opacidade do overlay e do popup
      setTimeout(function () {
        overlay.style.opacity = "1";
        popup.style.opacity = "1";
      }, 100);
    } else {
      overlay.style.opacity = "0";
      popup.style.opacity = "0";

      // Esperar a transição terminar antes de ocultar o overlay e o popup
      setTimeout(function () {
        overlay.style.display = "none";
        popup.style.display = "none";
      }, 500); // Tempo correspondente à duração da transição CSS
    }

    // Ativar ou desativar rolagem do corpo
    if (action === "block") {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }

  abrirBtn.addEventListener("click", function () {
    togglePopupDisplay(overlay, popup1, "block");
  });

  overlay.addEventListener("click", function () {
    togglePopupDisplay(overlay, popup1, "none");
    togglePopupDisplay(overlay, popup2, "none");
  });

  itensMenu.forEach(function (item) {
    item.addEventListener("click", function () {
      togglePopupDisplay(overlay, popup1, "none");
    });
  });

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      togglePopupDisplay(overlay, popup2, "block");
    });
  });
});
