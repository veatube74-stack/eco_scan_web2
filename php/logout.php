<?php
session_start();
session_unset(); // очищаем сессию
session_destroy(); // уничтожаем её
header("Location: ../main/main.html"); // возвращаем на главную
exit();
?>