
        // Получаем элементы DOM
        // const contactBtn = document.getElementById('contactBtn');
        // const heroContactBtn = document.getElementById('heroContactBtn');






// Анимация счетчиков статистики с быстрым стартом
function animateCounter(element, finalValue, duration = 1500) { // Уменьшил до 1.5 секунд
    let startValue = 0;
    let startTime = null;
    
    function updateCounter(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Более агрессивная кривая ускорения
        const easeOutProgress = 1 - Math.pow(1 - progress, 2); // Упростил степень
        
        const currentValue = Math.floor(easeOutProgress * finalValue);
        element.textContent = currentValue.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = finalValue.toLocaleString();
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Intersection Observer (запуск при прокрутке до секции)
function initCountersOnScroll() {
    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat1 = document.getElementById("stat1");
                const stat2 = document.getElementById("stat2");
                const stat3 = document.getElementById("stat3");
                const stat4 = document.getElementById("stat4");
                
                // Еще более быстрые анимации
                if (stat1) animateCounter(stat1, 10000, 1200); // 1.2 секунды
                if (stat2) animateCounter(stat2, 10000, 1300); // 1.3 секунды
                if (stat3) animateCounter(stat3, 10000, 1400); // 1.4 секунды
                if (stat4) animateCounter(stat4, 10, 800);     // 0.8 секунды
                
                observer.unobserve(statsSection);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(statsSection);
}

// Запускаем отслеживание прокрутки
document.addEventListener('DOMContentLoaded', initCountersOnScroll);







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
});

registerBtn.addEventListener('click', () => {
    registerModal.style.display = 'block';
});

mobileLoginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
    // Закрываем мобильное меню если оно открыто
    if (navMain && navMain.classList.contains('active')) {
        toggleMobileMenu();
    }
});

mobileRegisterBtn.addEventListener('click', () => {
    registerModal.style.display = 'block';
    // Закрываем мобильное меню если оно открыто
    if (navMain && navMain.classList.contains('active')) {
        toggleMobileMenu();
    }
});

// Закрытие модальных окон
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
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
    }
    if (e.target === registerModal) {
        registerModal.style.display = 'none';
    }
});

//убрал на время тестов AK
// Обработка форм
// document.getElementById('loginForm').addEventListener('submit', (e) => {
//     e.preventDefault();
//     // Здесь будет логика входа
//     const username = document.getElementById('loginUsername').value;
//     const password = document.getElementById('loginPassword').value;
    
//     // Простая валидация
//     if (username && password) {
//         alert(`Вход выполнен для пользователя: ${username}`);
//         loginModal.style.display = 'none';
//         window.open('../php/login.php', '_blank');
//         // window.location.href = '../profile/profile.html';

//         // Успешный вход - перенаправление на profile.html
//         // setTimeout(() => {
//         //     window.location.href = '../profile/profile.html';
//         // }, 1000); // Перенаправление через 1 секунду  
//     } else {
//         alert('Пожалуйста, заполните все поля');
//     }
// });

ocument.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault(); // блокируем стандартную отправку

    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (!username || !password) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    const form = e.target;
    const actionUrl = form.getAttribute('action'); // "../php/login.php"
    const method = form.getAttribute('method');    // "post"

    // создаём временную форму для отправки POST-запроса в новой вкладке
    const tempForm = document.createElement('form');
    tempForm.action = actionUrl;
    tempForm.method = method;
    tempForm.target = '_blank'; // новая вкладка

    // добавляем данные
    const userField = document.createElement('input');
    userField.type = 'hidden';
    userField.name = 'username';
    userField.value = username;

    const passField = document.createElement('input');
    passField.type = 'hidden';
    passField.name = 'password';
    passField.value = password;

    tempForm.appendChild(userField);
    tempForm.appendChild(passField);

    document.body.appendChild(tempForm);
    tempForm.submit(); // отправляем
    document.body.removeChild(tempForm); // чистим DOM
});

//уберу ненадолго либо надолго АК
// document.getElementById('registerForm').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const firstName = document.getElementById('registerFirstName').value;
//     const lastName = document.getElementById('registerLastName').value;
//     const email = document.getElementById('registerEmail').value;
//     const username = document.getElementById('registerUsername').value;
//     const password = document.getElementById('registerPassword').value;
//     const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
//     // Валидация
//     if (!firstName || !lastName || !email || !username || !password || !confirmPassword) {
//         alert('Пожалуйста, заполните все поля');
//         return;
//     }
    
//     if (password !== confirmPassword) {
//         alert('Пароли не совпадают!');
//         return;
//     }
    
//     if (password.length < 6) {
//         alert('Пароль должен содержать минимум 6 символов');
//         return;
//     }
    
//     // Здесь будет логика регистрации
//     alert(`Регистрация успешна!\nДобро пожаловать, ${firstName} ${lastName}!`);
//     registerModal.style.display = 'none';
//     window.location.href = '../profile/profile.html';
// });

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const firstName = document.getElementById('registerFirstName').value.trim();
    const lastName = document.getElementById('registerLastName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const username = document.getElementById('registerUsername').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    // 🔹 Простая валидация
    if (!firstName || !lastName || !email || !username || !password || !confirmPassword) {
        alert('⚠️ Пожалуйста, заполните все поля');
        return;
    }

    if (password !== confirmPassword) {
        alert('❌ Пароли не совпадают!');
        return;
    }

    if (password.length < 6) {
        alert('Пароль должен содержать минимум 6 символов');
        return;
    }

    // 🔹 Формируем данные для отправки
    const formData = new FormData();
    formData.append('firstname', firstName);
    formData.append('lastname', lastName);
    formData.append('email', email);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('confirm_password', confirmPassword);

    try {
        // 🔹 Отправка на сервер
        const response = await fetch('../php/register.php', {
            method: 'POST',
            body: formData
        });

        const text = await response.text();

        // 🔹 Проверяем ответ сервера
        if (text.includes('Регистрация прошла успешно')) {
            alert(`✅ Добро пожаловать, ${firstName} ${lastName}!`);
            // Закрываем модалку и редиректим
            document.getElementById('registerModal').style.display = 'none';
            window.location.href = '../profile/profile.html';
        } else {
            alert('❗ Ошибка: ' + text);
        }

    } catch (error) {
        console.error('Ошибка:', error);
        alert('🚫 Произошла ошибка при регистрации.');
    }
});

// Предотвращение закрытия при клике на само модальное окно
document.querySelectorAll('.modal-content').forEach(content => {
    content.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});





// Кнопка Наверх
const pushToTop = document.getElementById('pushToTop');

// Показываем/скрываем кнопку при скролле
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        pushToTop.classList.add('active');
    } else {
        pushToTop.classList.remove('active');
    }
});

// Плавная прокрутка наверх при клике
pushToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Альтернативный вариант для старых браузеров
function scrollToTop() {
    const currentPosition = window.pageYOffset;
    
    if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 8);
    }
}

// Добавляем обработчик для альтернативного метода
pushToTop.addEventListener('click', (e) => {
    e.preventDefault();
    
    if ('scrollBehavior' in document.documentElement.style) {
        // Поддержка smooth scroll
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        // Fallback для старых браузеров
        scrollToTop();
    }
});





// FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Закрываем все остальные элементы
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Переключаем текущий элемент
            item.classList.toggle('active');
        });
    });
});