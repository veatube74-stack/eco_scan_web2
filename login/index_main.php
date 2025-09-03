<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eco Scan</title>
    <link rel="stylesheet" href="./styles/style.css">
    <link rel="stylesheet" href="./styles/font-awesome-4.7.0/css/font-awesome.min.css">
</head>

<body>
    <header>
        <div class="header-wapper">
            <div class="header-flex">
                <h1 class="logo">
                    <img src="./images/Group 1.png" alt="">Eco Scan 
                </h1>
                <nav>
                    <a href="#about">О нас</a>
                    <a href="#contact us">Связь с нами</a>
                    <a href="../eco scan profile/index.html" id="profileLink"><button class="welcome-btn1 primary">Личный кабинет</button></a>
                </nav>
            </div>
        </div>
    </header>

<section class="registration-section" id="welcome">
<div class="registration-wrapper">
    <div class="registration-txt">
        <h2>
            Потребляй. Сканируй. Сортируй
        </h2>
    </div>


    <div class="registration-container">
        <div class="registration-header">
            <h2>Войти</h2>
        </div>
        
        <form action="login_main.php" method="post">
            <div class="form-group">
                <label for="email">Логин</label>
                <input type="text" placeholder="login" id="login" name="login" required>
            </div>
            
            <div class="form-group">
                <label for="password">Пароль</label>
                <input type="password" placeholder="password" id="password" name="password" required>
            </div>
            
            <!-- <div class="form-group">
                <label for="confirm-password">Подтвердите пароль</label>
                <input type="password" id="confirm-password" name="confirm-password" required>
            </div> -->
            
            <button type="submit" class="welcome-btn2 primary"><a href="../profile/index_main.php">Войти</button></a>
        </form>
    </div>
</div>
</section>




<footer>
    <div class="foot-nav">
        <nav>
            <a href="#welcome">Главная</a>
            <a href="#about">О нас</a>
            <a href="#service">Сервисы</a>
            <a href="#contact us">Связаться с нами</a>
        </nav>
    </div>
    <div>
        <h3 class="logo">Copyright @ All right reserved</h3>
    </div>
</footer>
</body>




</html>