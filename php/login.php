<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = getenv('DB_HOST') ?: 'db';
$username = getenv('DB_USER') ?: 'ecoscan_user';
$dbpassword = getenv('DB_PASSWORD') ?: 'ecoscan_pass';
$dbname = getenv('DB_NAME') ?: 'ecoscan';

$conn = new mysqli($servername, $username, $dbpassword, $dbname);
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

$login = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

if (empty($login) || empty($password)) {
    die('⚠️ Введите логин и пароль.');
}

$sql = "SELECT * FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $login);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();

    if (password_verify($password, $user['password'])) {
        // сохраняем пользователя в сессию
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['firstname'] = $user['firstname'];
        $_SESSION['lastname'] = $user['lastname'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['email'] = $user['email'];

        // редиректим на профиль
        header("Location: ../profile/profile.php");
        exit();
    } else {    
        echo "❌ Неверный пароль.";
    }
} else {
    echo "❌ Пользователь не найден.";
}

$stmt->close();
$conn->close();
?>