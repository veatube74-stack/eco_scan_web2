<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Получаем данные из формы
$firstname = $_POST['firstname'] ?? '';
$lastname = $_POST['lastname'] ?? '';
$email = $_POST['email'] ?? '';
$login = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';
$confirm_password = $_POST['confirm_password'] ?? '';

// Проверка, что поля не пустые
if (empty($login) || empty($password) || empty($confirm_password)) {
    die('⚠️ Заполните все обязательные поля.');
}

// Проверка совпадения паролей
if ($password !== $confirm_password) {
    die('❌ Пароли не совпадают!');
}

// Хешируем пароль перед сохранением
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// --- Пример сохранения в базу (MySQLi) ---
$servername = getenv('DB_HOST') ?: 'db';
$username = getenv('DB_USER') ?: 'ecoscan_user';
$dbpassword = getenv('DB_PASSWORD') ?: 'ecoscan_pass';
$dbname = getenv('DB_NAME') ?: 'ecoscan';

$conn = new mysqli($servername, $username, $dbpassword, $dbname);

// Проверка соединения
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

// SQL-запрос
$sql = "INSERT INTO users (firstname, lastname, email, username, password) 
        VALUES ('$firstname', '$lastname', '$email', '$login', '$hashedPassword')";

if ($conn->query($sql) === TRUE) {
    echo "✅ Регистрация прошла успешно!";
} else {
    echo "Ошибка: " . $conn->error;
}

$conn->close();
?>