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
    <link rel="stylesheet" href="./styles/main.css">
    <link rel="stylesheet" href="../profile/styles/profile.css">
    <link rel="stylesheet" href="../rating/style/rating.css">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="./styles/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" rel="stylesheet">
</head>

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

<h1 class="page-title">🏆 Лидерборд EcoScan</h1>

 <section class="rank-top" aria-label="Топ 3">
    <div class="podium">
      <!-- место 2 -->
      <div class="podium-item place-2">
        <div class="avatar-wrap">
          <img src="../rating/avatars/2_st.jpg" alt="Аватар <?=$top3[1]['nick']?>" class="avatar">
        </div>
        <div class="meta">
          <div class="nick">Bahytzhan Karabaev</div>
          <div class="sub">997 Очков</div>
        </div>
        <div class="badge">2</div>
      </div>

      <!-- место 1 -->
      <div class="podium-item place-1">
        <div class="avatar-wrap">
          <img src="../rating/avatars/1_st.jpg" alt="Аватар <?=$top3[0]['nick']?>" class="avatar">
        </div>
        <div class="meta">
          <div class="nick">Dana Zholdybai</div>
          <div class="sub">1000 Очков</div>
        </div> 
        <div class="badge">1</div>
      </div>

      <!-- место 3 -->
      <div class="podium-item place-3">
        <div class="avatar-wrap">
          <img src="../rating/avatars/3_st.jpg" alt="Аватар <?=$top3[2]['nick']?>" class="avatar">
        </div>
        <div class="meta">
          <div class="nick">Jandaulet</div>
          <div class="sub">996 Очков</div>
        </div>
        <div class="badge">3</div>
      </div>
    </div>
  </section>
    
<section class="rank-list" aria-label="Список игроков">
  <ul class="players">
    <li class="player-item">
      <div class="pos">4</div>
      <div class="avatar-wrap">
        <img src="../rating/avatars/4_st.jpg" alt="avatar">
      </div>
      <div class="info">
        <div class="nick">@krm_332</div>
        <div class="points">Очков: 920</div>
      </div>
    </li>

    <li class="player-item">
      <div class="pos">5</div>
      <div class="avatar-wrap">
        <img src="../rating/avatars/5_st.png" alt="avatar">
      </div>
      <div class="info">
        <div class="nick">@mamatova_leto</div>
        <div class="points">Очков: 911</div>
      </div>
    </li>

    <li class="player-item">
      <div class="pos">6</div>
      <div class="avatar-wrap">
        <img src="../rating/avatars/6_st.jpg" alt="avatar">
      </div>
      <div class="info">
        <div class="nick">@erasyl_shadow</div>
        <div class="points">Очков: 900</div>
      </div>
    </li>

        <li class="player-item">
      <div class="pos">7</div>
      <div class="avatar-wrap">
        <img src="../rating/avatars/7_st.jpg" alt="avatar">
      </div>
      <div class="info">
        <div class="nick">@vera_alexandrovna</div>
        <div class="points">Очков: 870</div>
      </div>
    </li>

    <li class="player-item">
      <div class="pos">8</div>
      <div class="avatar-wrap">
        <img src="../rating/avatars/8_st.jpg" alt="avatar">
      </div>
      <div class="info">
        <div class="nick">@cr_rnld_777</div>
        <div class="points">Очков: 825</div>
      </div>
    </li>

    <li class="player-item">
      <div class="pos">9</div>
      <div class="avatar-wrap">
        <img src="../rating/avatars/9_st.jpg" alt="avatar">
      </div>
      <div class="info">
        <div class="nick">@mariyamochechka</div>
        <div class="points">Очков: 811</div>
      </div>
    </li>

    <li class="player-item">
      <div class="pos">10</div>
      <div class="avatar-wrap">
        <img src="../rating/avatars/10_st.jpg" alt="avatar">
      </div>
      <div class="info">
        <div class="nick">@addietic</div>
        <div class="points">Очков: 808</div>
      </div>
    </li>

    <li class="player-item">
      <div class="pos">11</div>
      <div class="avatar-wrap">
        <img src="../rating/avatars/11_st.jpg" alt="avatar">
      </div>
      <div class="info">
        <div class="nick">@mergennnurp</div>
        <div class="points">Очков: 792</div>
      </div>
    </li>

    <li class="player-item">
      <div class="pos">12</div>
      <div class="avatar-wrap">
        <img src="../rating/avatars/12_st.jpg" alt="avatar">
      </div>
      <div class="info">
        <div class="nick">@nnurzh1k</div>
        <div class="points">Очков: 789</div>
      </div>
    </li>

    <li class="player-item">
      <div class="pos">13</div>
      <div class="avatar-wrap">
        <img src="../rating/avatars/13_st.jpeg" alt="avatar">
      </div>
      <div class="info">
        <div class="nick">@ars.its.me</div>
        <div class="points">Очков: 777</div>
      </div>
    </li>

    <li class="player-item">
      <div class="pos">14</div>
      <div class="avatar-wrap">
        <img src="../rating/avatars/14_st.jpg" alt="avatar">
      </div>
      <div class="info">
        <div class="nick">@4etve1ka</div>
        <div class="points">Очков: 744</div>
      </div>
    </li>
    <!-- пример для текущего пользователя -->
    <li class="player-item you">
      <div class="pos">???</div>
      <div class="avatar-wrap">
        <img src="../images/logo-green.png" alt="avatar">
      </div>
      <div class="info">
        <div class="nick">Вы</div>
        <div class="points">Очков: 0</div>
      </div>
    </li>
  </ul>
</section>

</main>


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

</body>

</html>