
        // Получаем элементы DOM
        const contactBtn = document.getElementById('contactBtn');
        const heroContactBtn = document.getElementById('heroContactBtn');
        const closeModalBtn = document.getElementById('closeModal');
        const modalOverlay = document.getElementById('modalOverlay');
        const modal = document.querySelector('.modal');
        
        // Функция открытия модального окна
        function openModal() {
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
        }
        
        // Функция закрытия модального окна
        function closeModal() {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Восстанавливаем прокрутку
        }
        
        // Назначаем обработчики событий для открытия
        if (contactBtn) {
            contactBtn.addEventListener('click', openModal);
        }
        
        if (heroContactBtn) {
            heroContactBtn.addEventListener('click', openModal);
        }
        
        // Назначаем обработчики событий для закрытия
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', closeModal);
        }
        
        // Закрытие при клике вне окна
        if (modalOverlay) {
            modalOverlay.addEventListener('click', function(e) {
                if (e.target === modalOverlay) {
                    closeModal();
                }
            });
        }
        
        // Закрытие по клавише Esc
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeModal();
            }
        });
        
        // Предотвращаем всплытие события клика внутри модального окна
        if (modal) {
            modal.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }

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
    