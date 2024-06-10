function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

function smoothScroll(target, duration, itensMenu) {
  if (!isMobileDevice()) {
    var targetElement = document.querySelector(target);
    var targetPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset - 30;
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
    var targetElement = document.querySelector(target);
    targetElement.scrollIntoView({ behavior: "auto", block: "start" });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  if (!isMobileDevice()) {
    var itensMenu = document.querySelectorAll("#popup-1 li a");
    itensMenu.forEach(function (item) {
      item.addEventListener("click", function (event) {
        event.preventDefault();
        var target = this.getAttribute("href");
        smoothScroll(target, 700, itensMenu);
      });
    });

    var botaoContato = document.querySelector(".botao-contato");
    botaoContato.addEventListener("click", function (event) {
      event.preventDefault();
      smoothScroll("#contato", 700, itensMenu);
    });
  }
});
