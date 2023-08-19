<?php
$user = 'root';
$password = 'ss4015';

$dsn = "mysql:host=localhost;dbname=blog";
$pdo = new PDO($dsn, $user, $password);

$title = $_POST['title'];
$description = $_POST['description'];
$source_code = $_POST['source_code'];
$language = $_POST['language'];

$query = "INSERT INTO main_table(language, title, description, source_code, date) VALUES('$language', '$title', '$description', '$source_code', now())";

$stmt = $pdo->prepare($query); 
$stmt->execute(); 
$result = $stmt->fetchAll(PDO::FETCH_NUM); 

echo "<script>location.replace('blog_index.html');</script>";

?>