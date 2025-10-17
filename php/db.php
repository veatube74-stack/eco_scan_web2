<?php
$host = 'localhost';
$db   = 'ecoscan';
$user = 'root';   // замени на своего пользователя MySQL
$pass = '';       // пароль от MySQL (если есть)
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  PDO::ATTR_EMULATE_PREPARES   => false,
];
try {
  $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
  exit(json_encode(['error' => 'Ошибка подключения: ' . $e->getMessage()]));
}
?>
