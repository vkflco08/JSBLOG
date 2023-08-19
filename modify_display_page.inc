<?php
$user = 'root';
$password = 'ss4015';

$dsn = "mysql:host=localhost;dbname=blog";
$pdo = new PDO($dsn, $user, $password);

$keyTitle = $_POST['title'];

$query = "SELECT * FROM main_table WHERE title=?";
$stmt = $pdo->prepare($query); 
$stmt->execute(array($keyTitle)); 
$result = $stmt->fetchAll(PDO::FETCH_NUM); 
?>
