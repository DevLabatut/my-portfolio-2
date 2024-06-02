// menu.js
const menu = document.getElementById('menu');
const iconAbrirMenu = document.getElementById('abrir');
const iconFecharMenu = document.getElementById('fechar');
const menuItems = document.querySelectorAll('#menu li a');

iconAbrirMenu.addEventListener('click', toggleMenu);
iconFecharMenu.addEventListener('click', fecharMenu);

function toggleMenu() {
  menu.classList.toggle('open');
  document.body.style.overflowY = 'hidden';
}

function fecharMenu() {
  menu.classList.remove('open');
  document.body.style.overflowY = 'auto';
}

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.remove('open');
    document.body.style.overflowY = 'auto';
  });
});
