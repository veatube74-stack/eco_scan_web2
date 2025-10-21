<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EcoScan - Главная</title>
    <link rel="stylesheet" href="./styles/about.css">
    <link rel="stylesheet" href="../profile/styles/profile.css">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="./styles/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" rel="stylesheet">
</head>

<script>
  document.getElementById("scrollToAbout").addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({
      behavior: "smooth"
    });
  });
</script>

<body>
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
        <li><a href="../contact/contactlog.php">Контакты</a></li>
        <li><a href="../bonus/bonus.php">Бонусы</a></li>
        <li><a href="../rating/rating.php">Рейтинг</a></li>
      </ul>
  
      <!-- Профиль в мобильном меню как обычный пункт -->
       <div class="mobile-profile">
        <ul>
          <li>
            <a href="../profile/profil.php">
                <i class="fas fa-user"></i>
                &nbsp;&nbsp;Личный кабинет
            </a>
          </li>
          <li>
            <a href="../main/main.html" class="logout-mobile">
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
            <a href="../main/main.html" class="dropdown-item logout">
                <i class="fas fa-sign-out-alt"></i>
                Выйти
            </a>
          </div>
        </div>
      </div>

  </div>
</header>

    <!-- wfsedzxwsdx -->
        <!-- Hero Section -->
    <section class="hero">
        <div class="container hero-content">
            <h1>ECO SCAN - ПРОЕКТ КОТОРЫЙ ИЗМЕНИТ МИР</h1>
            <p>Мы верим, что большие перемены начинаются с простых действий. ECO Scan создаёт будущее, где забота о планете становится частью повседневной жизни.</p>
            
            <div class="hero-buttons">
                <button class="btn btn-secondary btn-large" id="scrollToAbout">
                    <a href="#">Узнать подробнее</a>
                </button>
            </div>
        </div>
    </section>


    <!-- About Section -->
<section class="about" id="about">
    <div class="container about-content">
        <div class="about-text">
            <h2>О нас</h2>
            <p>Мы — команда ECO Scan, которая объединяет технологии и экологию, создавая современную сеть фандоматов для приёма вторсырья. Мы развиваем инновационные решения, чтобы сделать процесс переработки простым и удобным, а заботу о природе — частью повседневной жизни. Для нас важно не просто внедрять технологии, а менять культуру потребления, вдохновляя людей действовать осознанно.</p>
        </div>
        <div class="about-image">
            <img src="../images/about_1.png" alt="ECO Scan команда">
        </div>
    </div>
</section>

<!-- Advantages Section -->
<section class="advantages">
    <div class="container advantages-content">
        <div class="advantages-image">
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Преимущества ECO Scan">
        </div>
        <div class="advantages-text">
            <h2>Преимущества</h2>
            <ul class="advantages-list">
                <li>
                    <i class="fas fa-check-circle"></i>
                    <span>Используем современные технологии для сбора и анализа данных о переработке.</span>
                </li>
                <li>
                    <i class="fas fa-check-circle"></i>
                    <span>Поощряем пользователей бонусами, рейтингами и челленджами за экологичные действия.</span>
                </li>
                <li>
                    <i class="fas fa-check-circle"></i>
                    <span>Всё взаимодействие с фандоматами через интуитивный интерфейс.</span>
                </li>
                <li>
                    <i class="fas fa-check-circle"></i>
                    <span>Повышаем экологическую культуру среди студентов, офисных работников и жителей городов.</span>
                </li>
            </ul>
        </div>
    </div>
</section>

<!-- Goals Section -->
<section class="goals">
    <div class="container goals-content">
        <div class="goals-text">
            <h2>Наши цели</h2>
            <ul class="goals-list">
                <li>
                    <i class="fas fa-check-circle"></i>
                    <span>Повышать уровень экологической осознанности среди населения.</span>
                </li>
                <li>
                    <i class="fas fa-check-circle"></i>
                    <span>Сделать раздельный сбор отходов простым и доступным.</span>
                </li>
                <li>
                    <i class="fas fa-check-circle"></i>
                    <span>Внедрять инновационные решения в сферу переработки.</span>
                </li>
                <li>
                    <i class="fas fa-check-circle"></i>
                    <span>Формировать сообщество людей, готовых менять окружающую среду к лучшему.</span>
                </li>
                <li>
                    <i class="fas fa-check-circle"></i>
                    <span>Снизить количество пластиковых отходов и продвигать культуру устойчивого потребления.</span>
                </li>
            </ul>
        </div>
        <div class="goals-image">
            <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Наши цели ECO Scan">
        </div>
    </div>
</section>
    
     <!-- Roadmap Section -->
    <section class="img">
        <img src="../images/дорожная карта.png" alt="">
    </section>

    <!-- Our team Section-->
    <section class="img">
        <img src="../images/our team.png" alt="">
    </section>


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
    

    <!-- Кнопка Наверх -->
    <div class="push-to-top" id="pushToTop">
        <i class="fas fa-chevron-up"></i>
    </div>
    
</body>


<script src="script.js"></script>


</html>