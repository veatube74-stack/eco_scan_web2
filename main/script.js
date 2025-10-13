
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

// Модальные окна
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const mobileLoginBtn = document.getElementById('mobileLoginBtn');
const mobileRegisterBtn = document.getElementById('mobileRegisterBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeButtons = document.querySelectorAll('.close');
const goToRegister = document.getElementById('goToRegister');
const goToLogin = document.getElementById('goToLogin');

// Открытие модальных окон
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

registerBtn.addEventListener('click', () => {
    registerModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

mobileLoginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    // Закрываем мобильное меню если оно открыто
    if (navMain.classList.contains('active')) {
        toggleMobileMenu();
    }
});

mobileRegisterBtn.addEventListener('click', () => {
    registerModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    // Закрываем мобильное меню если оно открыто
    if (navMain.classList.contains('active')) {
        toggleMobileMenu();
    }
});

// Закрытие модальных окон
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// Переключение между модальными окнами
goToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    registerModal.style.display = 'block';
});

goToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.style.display = 'none';
    loginModal.style.display = 'block';
});

// Закрытие при клике вне модального окна
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === registerModal) {
        registerModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Обработка форм
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Здесь будет логика входа
    alert('Форма входа отправлена!');
    loginModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Пароли не совпадают!');
        return;
    }
    
    // Здесь будет логика регистрации
    alert('Форма регистрации отправлена!');
    registerModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});