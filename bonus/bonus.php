<?php
session_start();
?>
<?php require_once('../php/check_auth.php'); ?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EcoScan — Бонусы</title>
  <link rel="stylesheet" href="./bonus.css">
  <link rel="stylesheet" href="../style.css">
  <link rel="stylesheet" href="../profile/styles/profile.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>

<body>
  <!-- Header -->
 <header class="header">
  <div class="container header-content">
    <div class="logo">
      <a href="../main/main-log.php">
        <img src="../images/logo_yellow.png" alt="EcoScan">
        <h1>EcoScan</h1>
      </a>
    </div>
    
    <div class="burger" id="burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    
    
    <nav class="nav" id="navMenu">
      <ul>
        <li><a href="../main/main-log.php">Главная</a></li>
        <li><a href="../about/aboutlog.php">О нас</a></li>
        <li><a href="../map/maplog.php">Карта</a></li>
        <li><a href="../contact/contactlog.html">Контакты</a></li>
        <li><a href="./bonus.php">Бонусы</a></li>
        <li><a href="../rating/rating.php">Рейтинг</a></li>
      </ul>
  
      <!-- Профиль в мобильном меню как обычный пункт -->
       <div class="mobile-profile">
        <ul>
          <li>
            <a href="../profile/profile.php">
                <i class="fas fa-user"></i>
                &nbsp;&nbsp;Личный кабинет
            </a>
          </li>
          <li>
            <a href="../php/logout.php" class="logout-mobile">
                <i class="fas fa-sign-out-alt"></i>
                Выйти
            </a>
          </li>
        </ul>
      </div>
  
      <!-- Соцсети в стиле econetwork.green -->
       <div class="mobile-social">
        <a href="https://www.instagram.com/ecoscan06?igsh=MXd1czRyZjR1bnc3eQ==" class="social-petal-icon"><i class="fab fa-instagram"></i></a>
        <a href="#" class="social-petal-icon"><i class="fab fa-telegram"></i></a>
        <a href="#" class="social-petal-icon"><i class="fas fa-envelope"></i></a>
        <a href="#" class="social-petal-icon"><i class="fas fa-phone"></i></a>
      </div>
    </nav>

    <!-- Оверлей для затемнения фона -->
     <div class="nav-overlay" id="navOverlay"></div>


     <!-- ЛК с выпадающим меню -->
      <div class="profile">
        <div class="profile-dropdown">
          <button class="profile-btn">
            <img src="../images/logo-green.png" alt="User Avatar" class="avatarnav" />
            <span>Личный кабинет</span>
            <i class="fas fa-chevron-down dropdown-arrow"></i>
          </button>

          <div class="dropdown-menu">
            <a href="../profile/profile.php" class="dropdown-item">
                <i class="fas fa-user"></i>
                Личный кабинет
            </a>
            <a href="../php/logout.php" class="dropdown-item logout">
                <i class="fas fa-sign-out-alt"></i>
                Выйти
            </a>
          </div>
        </div>
      </div>

  </div>
</header>

  <!-- Main -->
  <main class="bonus-container">
    <aside class="bonus-sidebar">
      <ul>
        <li class="active" data-section="how">
          <i class="fas fa-lightbulb"></i> Как пользоваться бонусами
        </li>
        <li data-section="exchange">
          <i class="fas fa-exchange-alt"></i> Обмен бонусов
        </li>
        <li data-section="history">
          <i class="fas fa-history"></i> История операций
        </li>
      </ul>
</aside>

    <section class="bonus-content">
      <div class="bonus-section active" id="section-how">
        <h2>Как пользоваться бонусами</h2>
        <p>Вы зарабатываете бонусы, сдавая перерабатываемые отходы. Эти бонусы можно обменять на скидки, купоны и подарки от наших партнёров.</p>
        <ul class="bonus-tips">
          <li>1 балл = 1 бонус.</li>
          <li>Бонусы можно использовать в разделе "Обмен бонусов".</li>
          <li>Историю всех транзакций можно посмотреть в "Истории операций".</li>
        </ul>
      </div>

      <div class="bonus-section" id="section-exchange">
        <h2>Обмен бонусов</h2>
        <p>Выберите партнёра или акцию, чтобы потратить свои бонусы:</p>
        <div class="exchange-grid">
          <div class="exchange-card">
            <img src="../images/store1.png" alt="">
            <h3>Эко-магазин</h3>
            <p>Скидка 10% за 100 бонусов</p>
            <button>Обменять</button>
          </div>
          <div class="exchange-card">
            <img src="../images/store2.png" alt="">
            <h3>Green Coffee</h3>
            <p>Бесплатный кофе за 50 бонусов</p>
            <button>Обменять</button>
          </div>
        </div>
      </div>

      <div class="bonus-section" id="section-history">
        <h2>История операций</h2>
        <table class="history-table">
          <thead>
            <tr><th>Дата</th><th>Описание</th><th>Сумма</th></tr>
          </thead>
          <tbody>
            <tr><td>17.10.2025</td><td>Обмен на купон Green Coffee</td><td>-50</td></tr>
            <tr><td>15.10.2025</td><td>Сдано: Пластик</td><td>+20</td></tr>
            <tr><td>10.10.2025</td><td>Сдано: Стекло</td><td>+10</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>

<!-- Footer -->
<footer class="footer">
  <div class="container footer-content">
    <div class="footer-brand">
      <img src="../images/logo-white.png" alt="EcoScan logo" class="footer-logo" />
      <h2 class="footer-title">ECO SCAN</h2>
    </div>

    <div class="footer-section">
      <li class="footer-head">Навигация</li>
      <ul>
        <li><a href="../main/main-log.php">Главная</a></li>
        <li><a href="../about/aboutlog.php">О нас</a></li>
        <li><a href="../map/maplog.php">Карта</a></li>
        <li><a href="../contact/contactlog.php">Связь с нами</a></li>
      </ul>
    </div>

    <div class="footer-section">
      <li class="footer-head">Контакты</li>
      <ul>
        <li><a href="#"><i class="fas fa-envelope"></i> eco.scan06@gmail.com</a></li>
        <li><a href="#"><i class="fas fa-phone"></i> +7 (777) 029-11-50</a></li>
        <li><a href="https://t.me/ecoscan06"><i class="fab fa-telegram"></i> ecoscan06</a></li>
        <li><a href="https://www.instagram.com/ecoscan06?igsh=MXd1czRyZjR1bnc3eQ=="><i class="fab fa-instagram"></i> @ecoscan06</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <p>Copyright © 2025 EcoScan, TOO</p>
  </div>
</footer>

  <script src="bonus.js"></script>
  <script src="../profile/script.js"></script>
</body>
</html>
