<?php
include 'database.php';
$email = 'test@example.com'; // remplace par un email existant
$motdepasse = 'password123'; // mot de passe clair connu

$stmt = $db->prepare("SELECT * FROM user WHERE email = :email");
$stmt->execute(['email' => $email]);
$user = $stmt->fetch();

if ($user && password_verify($motdepasse, $user['motdepasse'])) {
    echo "Connexion OK";
} else {
    echo "Email ou mot de passe incorrect";
}
