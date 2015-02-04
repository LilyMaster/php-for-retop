<?php
include_once('vars.php');

$operation = 'INSERT';
$name = $_POST['vardas'];
$surname = $_POST['surname'];

$conn = new mysqli($server, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$conn->set_charset("utf8");

$stmt = $conn->prepare("INSERT INTO tbl_pirma (vardas, surname) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $surname);
$stmt->execute();

echo "New records created successfully";

$stmt->close();
$conn->close();
?>