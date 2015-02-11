<?php
define('DOCROOT', realpath(dirname(__FILE__)).'/');
define('WEBROOT', $_SERVER['DOCUMENT_ROOT'].'/');
include_once(DOCROOT . 'includes/simple_html_dom.php');
include_once(DOCROOT . 'includes/php_functions.php');
include_once('config.php');

$server = $sql_details['host'];
$username = $sql_details['user'];
$password = $sql_details['pass'];
$dbname = $sql_details['db'];

// Create connection
$conn = new mysqli($server, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$conn->set_charset("utf8");

$sql = '
    SELECT *
    FROM tbl_prisijungimai
    WHERE puslapis = "Alio.lt"';

$result = $conn->query($sql);

$data = array();

/* Read the data from the query to array */
while($row = $result->fetch_assoc())
{
    $data[] = $row; // TODO po šito galima perrikiuoti array'jus pagal nurodytą atnaujinimo tvarką, pvz $data['eilesNr']
}

$logFile = fopen('AutomatasRenew.log', 'a');
fwrite($logFile, date(DATE_RFC2822) . " Pradedamas automatas \n\n");
fclose($logFile);

foreach($data as $value){
    $logFile = fopen('AutomatasRenew.log', 'a');
    $result = posts_renew('', $value['login'], $value['password']);
    fwrite($logFile, $result);
    fclose($logFile);
}

$logFile = fopen('AutomatasRenew.log', 'a');
fwrite($logFile, date(DATE_RFC2822) . " Automatas darbą baigė. \n\n");
fclose($logFile);