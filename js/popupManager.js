document.addEventListener("DOMContentLoaded", function () {
  const abrirBtn = document.getElementById("abrir");
  const overlay = document.getElementById("overlay");
  const popup1 = document.getElementById("popup-1");
  const popups = document.querySelectorAll(".popup-2");
  const itensMenu = document.querySelectorAll("#popup-1 li a");
  const buttons = document.querySelectorAll(".dd-demo");
  const closeIcons = document.querySelectorAll(".close-over");

  let currentVideoElement = null;

  function showVideo(videoSource, popup) {
    if (videoSource) {
      if (currentVideoElement) {
        currentVideoElement.pause();
      }
      const videoElement = popup.querySelector("video");
      videoElement.src = videoSource;
      videoElement.load();
      currentVideoElement = videoElement;
    }
  }

  function togglePopupDisplay(overlay, popup, action, smoothTransition = true) {
    if (action === "block") {
      overlay.style.opacity = "0";
      overlay.style.display = "block";
      popup.style.opacity = "0";
      popup.style.display = "block";
      if (smoothTransition) {
        setTimeout(function () {
          overlay.style.opacity = "1";
          popup.style.opacity = "1";
        }, 0);
      } else {
        overlay.style.opacity = "1";
        popup.style.opacity = "1";
      }
    } else {
      overlay.style.opacity = "0";
      popup.style.opacity = "0";
      setTimeout(
        function () {
          overlay.style.display = "none";
          popup.style.display = "none";
        },
        smoothTransition ? 500 : 0
      );
      if (currentVideoElement) {
        currentVideoElement.pause();
        currentVideoElement.src = "";
      }
    }
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
    closeAllPopups();
  });

  itensMenu.forEach(function (item) {
    item.addEventListener("click", function () {
      togglePopupDisplay(overlay, popup1, "none", false);
    });
  });

  buttons.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
      const videoSource = button.getAttribute("data-video");
      const popup = popups[index];
      const projectTitle = button.previousElementSibling.textContent;
      const popupTitle = popup.querySelector(".dal-titul");
      popupTitle.textContent = projectTitle;
      showVideo(videoSource, popup);
      togglePopupDisplay(overlay, popup, "block");
    });
  });

  closeIcons.forEach(function (closeIcon) {
    closeIcon.addEventListener("click", function () {
      closeAllPopups();
    });
  });

  function closeAllPopups() {
    togglePopupDisplay(overlay, popup1, "none", false);
    popups.forEach((popup) =>
      togglePopupDisplay(overlay, popup, "none", false)
    );
  }
});


// document.addEventListener("DOMContentLoaded", function () {
//   const abrirBtn = document.getElementById("abrir");
//   const overlay = document.getElementById("overlay");
//   const popup1 = document.getElementById("popup-1");
//   const popups = document.querySelectorAll(".popup-2");
//   const itensMenu = document.querySelectorAll("#popup-1 li a");
//   const buttons = document.querySelectorAll(".dd-demo");
//   const closeIcons = document.querySelectorAll(".close-over");

//   let currentVideoElement = null;

//   function showVideo(videoSource, popup) {
//     if (videoSource) {
//       if (currentVideoElement) {
//         currentVideoElement.pause();
//       }
//       const videoElement = popup.querySelector("video");
//       videoElement.src = videoSource;
//       videoElement.load();
//       currentVideoElement = videoElement;
//     }
//   }

//   function togglePopupDisplay(overlay, popup, action, smoothTransition = true) {
//     if (action === "block") {
//       overlay.style.opacity = "0";
//       overlay.style.display = "block";
//       popup.style.opacity = "0";
//       popup.style.display = "block";
//       if (smoothTransition) {
//         setTimeout(function () {
//           overlay.style.opacity = "1";
//           popup.style.opacity = "1";
//         }, 0);
//       } else {
//         overlay.style.opacity = "1";
//         popup.style.opacity = "1";
//       }
//     } else {
//       overlay.style.opacity = "0";
//       popup.style.opacity = "0";
//       setTimeout(
//         function () {
//           overlay.style.display = "none";
//           popup.style.display = "none";
//         },
//         smoothTransition ? 500 : 0
//       );
//       if (currentVideoElement) {
//         currentVideoElement.pause();
//         currentVideoElement.src = "";
//       }
//     }
//     if (action === "block") {
//       document.body.classList.add("no-scroll");
//     } else {
//       document.body.classList.remove("no-scroll");
//     }
//   }

//   abrirBtn.addEventListener("click", function () {
//     togglePopupDisplay(overlay, popup1, "block");
//   });

//   overlay.addEventListener("click", function () {
//     closeAllPopups();
//   });

//   itensMenu.forEach(function (item) {
//     item.addEventListener("click", function () {
//       togglePopupDisplay(overlay, popup1, "none", false);
//     });
//   });

//   buttons.forEach(function (button, index) {
//     button.addEventListener("click", function (event) {
//       const videoSource = button.getAttribute("data-video");
//       const popup = popups[index];
//       const projectTitle = button.previousElementSibling.textContent;
//       const popupTitle = popup.querySelector(".dal-titul");
//       popupTitle.textContent = projectTitle;
//       showVideo(videoSource, popup);
//       togglePopupDisplay(overlay, popup, "block");
//     });
//   });

//   closeIcons.forEach(function (closeIcon) {
//     closeIcon.addEventListener("click", function () {
//       closeAllPopups();
//     });
//   });

//   function closeAllPopups() {
//     togglePopupDisplay(overlay, popup1, "none", false);
//     popups.forEach((popup) =>
//       togglePopupDisplay(overlay, popup, "none", false)
//     );
//   }
// });
