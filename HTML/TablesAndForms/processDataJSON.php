<?php
require_once('vars.php');

// Create connection
$conn = new mysqli($server, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$conn->set_charset("utf8");


$sql = '
SELECT *
FROM tbl_pirma';

$result = $conn->query($sql);

$data = array();
/* Read the data from the query to array */
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

$result->free();
$conn->close();

/*$colNames = array_keys(reset($data));
print_r($colNames);
print_r($data);

echo json_encode($colNames);*/
echo json_encode($data);

/*echo json_last_error_msg();

echo "Should be finished...";*/


?>
