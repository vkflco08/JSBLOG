<?php
$user = 'root';
$password = 'ss4015';

$dsn = "mysql:host=localhost;dbname=blog";
$pdo = new PDO($dsn, $user, $password);

$num = $_POST['num'];

$query = "DELETE from main_table WHERE num='$num'";
$stmt = $pdo->prepare($query);
$stmt->execute(); 

echo "<script>location.replace('blog_index.html');</script>";
?>