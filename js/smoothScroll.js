// Verificar se é um dispositivo móvel
function isMobileDevice() {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  }
  
  // Função para rolagem suave (somente para desktop)
  function smoothScroll(target, duration, itensMenu) { // Adicionando 'itensMenu' como um parâmetro
    if (!isMobileDevice()) {
      var targetElement = document.querySelector(target);
      var targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset - 30; // Ajuste para o padding da seção
      var startPosition = window.pageYOffset;
      var distance = targetPosition - startPosition;
      var startTime = null;
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var ease = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, ease);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
  
      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    } else {
      // Se for um dispositivo móvel, simplesmente navegue para o destino sem rolagem suave
      var targetElement = document.querySelector(target);
      targetElement.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }
  
  // Adicionar ouvintes de eventos para links dentro do popup (somente para desktop)
  document.addEventListener("DOMContentLoaded", function () {
    if (!isMobileDevice()) {
      var itensMenu = document.querySelectorAll("#popup-1 li a"); // Definindo 'itensMenu' aqui
      itensMenu.forEach(function (item) {
        item.addEventListener("click", function (event) {
          event.preventDefault(); // Impedir o comportamento padrão do link
          var target = this.getAttribute("href");
          smoothScroll(target, 700, itensMenu); // Passando 'itensMenu' como um parâmetro
        });
      });
  
      // Adicionar ouvinte de eventos para o botão de contato
      var botaoContato = document.querySelector(".botao-contato");
      botaoContato.addEventListener("click", function (event) {
        event.preventDefault(); // Impedir o comportamento padrão do link
        smoothScroll("#contato", 700, itensMenu); // Passando 'itensMenu' como um parâmetro
      });
    }
  });
  