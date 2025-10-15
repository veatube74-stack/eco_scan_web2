// Бургер меню
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');
  navOverlay.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});

// Закрытие меню при клике на оверлей
navOverlay.addEventListener('click', () => {
  burger.classList.remove('active');
  navMenu.classList.remove('active');
  navOverlay.classList.remove('active');
  document.body.classList.remove('menu-open');
});

// Закрытие меню при клике на ссылку
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});

// Закрытие меню при нажатии Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu.classList.contains('active')) {
    burger.classList.remove('active');
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
});
    