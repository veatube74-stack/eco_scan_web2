<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    // Если не авторизован — отправляем на главную или логин
    header("Location: ../main/main.html");
    exit();
}
?>