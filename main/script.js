
        // Получаем элементы DOM
        const contactBtn = document.getElementById('contactBtn');
        const heroContactBtn = document.getElementById('heroContactBtn');

        // Анимация счетчиков статистики
        function infiniteCounter(element, start = 0, step = 1) {
            let current = start;
            setInterval(() => {
                current += step;
                element.textContent = current.toLocaleString();
            }, 1000); 
        }

        // Запуск анимации при загрузке страницы
        // infiniteCounter(document.getElementById("stat1"), 542809, 1);   // +1 в секунду
        // infiniteCounter(document.getElementById("stat2"), 1240, 2);     // +2 в секунду
        // infiniteCounter(document.getElementById("stat3"), 84356, 5);    // +5 в секунду
        // animateCounter(document.getElementById('stat4'), 2581, 2000);    


// Бургер меню
const burgerMain = document.getElementById('burgerMain');
const navMain = document.getElementById('navMain');
const navOverlay = document.getElementById('navOverlay');

burgerMain.addEventListener('click', () => {
  burgerMain.classList.toggle('active');
  navMain.classList.toggle('active');
  navOverlay.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});

// Закрытие меню при клике на оверлей
navOverlay.addEventListener('click', () => {
  burgerMain.classList.remove('active');
  navMain.classList.remove('active');
  navOverlay.classList.remove('active');
  document.body.classList.remove('menu-open');
});

// Закрытие меню при клике на ссылку
const navLinks = document.querySelectorAll('#navMain a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerMain.classList.remove('active');
    navMain.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});

// Закрытие меню при нажатии Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMain.classList.contains('active')) {
    burgerMain.classList.remove('active');
    navMain.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
});
    