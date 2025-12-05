document.addEventListener('DOMContentLoaded', function() {
    // Центр Алматы
    const centerLat = (43.2300 + 43.207500) / 2;
    const centerLng = (76.9500 + 76.665000) / 2;
    
    // Инициализация карты ОДИН РАЗ
    const map = L.map('map').setView([centerLat, centerLng], 11);
    
    // Добавление базового слоя карты
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Данные фандоматов
    const locations = [
        { 
            lat: 43.235441, 
            lng: 76.909835, 
            type: 'plastic', 
            name: 'Фандомат Пластик', 
            address: 'ул. Манаса 34/1',
            description: 'Международный университет информационных технологий (МУИТ)'
        },
        
        { 
            lat: 43.233585, 
            lng: 76.907840,
            type: 'plastic', 
            name: 'Фандомат Пластик', 
            address: 'ул. Мустафа Озтюрк, 5а',
            description: 'Колледж Международной Академии Бизнеса (МАБ)'
        },

        { 
            lat: 43.2350, 
            lng: 76.8920, 
            type: 'glass', 
            name: 'Пункт приема Стекла', 
            address: 'ул. Центральная, 35',
            description: 'Банк Центр Деньги'
        },

        { 
            lat: 43.2420, 
            lng: 76.8850, 
            type: 'paper', 
            name: 'Эко-центр Бумага', 
            address: 'ул. Зеленая, 18',
            description: 'Банк Money-com'
        },

        {  
            lat: 43.2389, 
            lng: 76.8897, 
            type: 'metal', 
            name: 'Металлоприемник', 
            address: 'ул. Главная, 12',
            description: 'ТЦ Новая'
        },

        { 
            lat: 43.2450, 
            lng: 76.8800, 
            type: 'electronics', 
            name: 'Центр утилизации электроники', 
            address: 'ул. Техническая, 25',
            description: 'Центр Поддержки Молодежи'
        }
    ];
    
    // Массив для хранения маркеров (для будущей фильтрации)
    const markers = [];
    
    // Добавление маркеров на карту
    locations.forEach(location => {
        const marker = L.marker([location.lat, location.lng], {
            icon: L.divIcon({
                className: 'custom-marker ' + location.type,
                html: location.type === 'university' ? 
                      '<i class="fas fa-graduation-cap"></i>' : 
                      '<i class="fas fa-trash-alt"></i>',
                iconSize: [30, 30],
                iconAnchor: [15, 30]
            })
        }).addTo(map);
        
        // Сохраняем маркер для фильтрации
        markers.push({
            element: marker,
            type: location.type
        });
        
        // Всплывающая информация при клике на маркер
        let popupContent = `
            <div style="min-width: 250px;">
                <h3 style="margin: 0 0 10px; color: #2e7d32;">${location.name}</h3>
                <p style="margin: 0 0 8px;"><strong>Адрес:</strong> ${location.address}</p>
        `;
        
        if (location.description) {
            popupContent += `<p style="margin: 0 0 8px;"><strong>Описание:</strong> ${location.description}</p>`;
        }
        
        if (location.type !== 'university') {
            popupContent += `<p style="margin: 0 0 10px;"><strong>Тип отходов:</strong> ${getTypeName(location.type)}</p>`;
        }
        
        popupContent += `
            <button style="background: #2e7d32; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; width: 100%;">
                Проложить маршрут
            </button>
            </div>
        `;
        
        marker.bindPopup(popupContent);
    });
    
    // Вспомогательная функция для получения названия типа
    function getTypeName(type) {
        const typeNames = {
            'plastic': 'Пластик',
            'glass': 'Стекло',
            'paper': 'Бумага',
            'metal': 'Металл',
            'electronics': 'Электроника'
        };
        return typeNames[type] || type;
    }
    
    // Функция фильтрации маркеров
    function filterMarkers() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const activeFilters = {};
        
        checkboxes.forEach(checkbox => {
            activeFilters[checkbox.id] = checkbox.checked;
        });
        
        console.log('Активные фильтры:', activeFilters);
        
        // Здесь можно добавить логику фильтрации маркеров
        // Например: если checkbox с id="plastic" не отмечен, скрыть все маркеры с type="plastic"
        // markers.forEach(marker => {
        //     if (!activeFilters[marker.type]) {
        //         map.removeLayer(marker.element);
        //     } else {
        //         map.addLayer(marker.element);
        //     }
        // });
    }
    
    // Обработчики для фильтров
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', filterMarkers);
    });
    
    // Функция для корректного отображения карты на мобильных
    function initMap() {
        setTimeout(() => {
            map.invalidateSize();
            // Перецентрируем карту на Алматы
            map.setView([centerLat, centerLng], 11);
        }, 100);
    }
    
    // Инициализация при загрузке
    initMap();
    
    // При изменении размера окна
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            map.invalidateSize();
        }, 200);
    });
    
    // При переключении ориентации экрана
    window.addEventListener('orientationchange', function() {
        setTimeout(() => {
            map.invalidateSize();
        }, 300);
    });
    
    // Поиск по адресу
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query) {
                    console.log('Поиск адреса:', query);
                    // Здесь можно добавить геокодинг для поиска адреса
                    // Например, используя Nominatim API
                }
            }
        });
    }
});