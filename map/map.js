
    // Центр 
    const centerLat = (43.2300 + 43.207500) / 2;
    const centerLng = (76.9500 + 76.665000) / 2;
    
    const map = L.map('map').setView([centerLat, centerLng], 11);
    
    // Добавление базового слоя карты
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
            lng: 76.8920, type: 'glass', 
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
        
        // Обработчики для фильтров
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                console.log('Фильтр изменен: ', checkbox.id, checkbox.checked);
                // Здесь будет логика фильтрации маркеров на карте
            });
        });
    