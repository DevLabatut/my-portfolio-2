const menu = document.getElementById('menu');
const iconAbrirMenu = document.getElementById('abrir');
const iconFecharMenu = document.getElementById('fechar');
const buttonLightDark = document.getElementById('butt-light-dark');
const lightIcon = document.getElementById('light');
const darkIcon = document.getElementById('dark');
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

buttonLightDark.addEventListener('click', function () {
  const isLightTheme = darkIcon.style.display === 'none';

  if (isLightTheme) {
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'block';
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  } else {
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'block';
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  }
});

darkIcon.style.display = 'none';
