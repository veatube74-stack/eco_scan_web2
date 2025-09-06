<?php
require_once('../back/db.php');
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$login = $_POST['login'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];


if (empty($login) || empty($name) || empty($surname) || empty($email) || empty($password) || empty($confirm_password)){
    echo "заполните все поля";
}
{
    if($password != $confirm_password){
        echo "пароли не совпадают";
    } else {
         $sql = "INSERT INTO `users` (name,surname,email,login,password) VALUES ('$name', '$surname', '$email', '$login', '$password')";
        if ($conn -> query($sql) == TRUE ) {
         echo "Успешная регистрация";
        } 
        else {
         echo "Ошибка: " . $conn->error;
        }
        
    }
}

// $sql = "INSERT INTO `users` (name,surname,email,login,password) VALUES ('$name', '$surname', '$email', '$login', '$password')";

// $conn -> query($sql);