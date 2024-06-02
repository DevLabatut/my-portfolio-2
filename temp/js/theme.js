// theme.js
const buttonLightDark = document.getElementById('butt-light-dark');
const lightIcon = document.getElementById('light');
const darkIcon = document.getElementById('dark');

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
