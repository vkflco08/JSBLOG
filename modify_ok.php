<?php
$user = 'root';
$password = 'ss4015';

$dsn = "mysql:host=localhost;dbname=blog";
$pdo = new PDO($dsn, $user, $password);

$num = $_POST['num'];
$title = $_POST['title'];
$description = $_POST['description'];
$source_code = $_POST['source_code'];
$language = $_POST['language'];

$query = "UPDATE main_table SET language='$language', title='$title', description='$description', source_code='$source_code' WHERE num='$num'";
$stmt = $pdo->prepare($query);
$stmt->execute(); 

$result = $stmt->fetchAll(PDO::FETCH_NUM); 

echo "<script>location.replace('blog_index.html');</script>";
?>