<?php
header('Content-Type: application/json');
require 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

$firstName = trim($data['firstName'] ?? '');
$lastName = trim($data['lastName'] ?? '');
$email = trim($data['email'] ?? '');
$username = trim($data['username'] ?? '');
$password = trim($data['password'] ?? '');

if (!$firstName || !$lastName || !$email || !$username || !$password) {
  echo json_encode(['success' => false, 'message' => 'Заполните все поля']);
  exit;
}

// Проверяем, есть ли такой email или username
$stmt = $pdo->prepare("SELECT id FROM users WHERE email = ? OR username = ?");
$stmt->execute([$email, $username]);
if ($stmt->fetch()) {
  echo json_encode(['success' => false, 'message' => 'Пользователь уже существует']);
  exit;
}

// Хэшируем пароль
$hash = password_hash($password, PASSWORD_DEFAULT);

// Добавляем пользователя
$stmt = $pdo->prepare("INSERT INTO users (first_name, last_name, email, username, password) VALUES (?, ?, ?, ?, ?)");
$stmt->execute([$firstName, $lastName, $email, $username, $hash]);

echo json_encode(['success' => true, 'message' => 'Регистрация успешна!']);
?>
