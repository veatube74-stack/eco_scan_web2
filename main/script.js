
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


        // Burger
        const burger = document.getElementById('burger');
        const nav = document.getElementById('nav');

        burger.addEventListener('click', () => {
           burger.classList.toggle('active');
           nav.classList.toggle('active');
        });
    