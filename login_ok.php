<?php
$user = $_POST['id'];
$password = $_POST['pw'];

$dsn = "mysql:host=localhost;dbname=blog";

try{
    $pdo = new PDO($dsn, $user, $password);
	$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false); 
    //Preppared Statement를 데이터베이스가 지원 하지 않을 경우 에뮬레이션 하는 기능으로 false를 지정해서 데이터베이스의 기능을 사용 
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION); //PDO 객체가 에러를 처리하는 방식을 결정 
} catch(PDOException $e) { 
    alert("db connect failed");
    echo "<script>location.replace('login_page.html');</script>";
} 

$stmt = $pdo->prepare($query);
$stmt->execute();

$result = $stmt->fetchAll(PDO::FETCH_NUM); 

echo "<script>location.replace('blog_index.html');</script>";

?>