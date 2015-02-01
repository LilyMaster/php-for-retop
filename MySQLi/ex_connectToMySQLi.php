<?php

$server = "localhost";
$username = "root";
$password = "MySQL";
$dbname = "manodb";

// Create connection
$conn = new mysqli($server, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo 'Connected to db: \'' . $dbname . '\' as \'' . $username . "' on '".$server."'";
}

$conn->close();
?>