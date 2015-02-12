<?php

define('DOCROOT', realpath(dirname(__FILE__)).'/'); echo DOCROOT."\n";
define('WEBROOT', $_SERVER['DOCUMENT_ROOT'].'/'); echo WEBROOT;
include_once(WEBROOT . 'includes/simple_html_dom.php');
include_once(WEBROOT . 'includes/php_functions.php');

$UA = getUA(); // Nustatome "User-Agent: "

$ch = curl_init();

// Get initial cookies
$url = 'http://skelbiu.lt';
$referer = 'http://skelbiu.lt';
$html = cURL_ping_html($url, $referer, $UA, $ch);
//echo $ghtml[1];

//$url = 'ssj.uzrasai.lt/manowebas/cURL%20Testing%20Grounds/Test1/POST_Debug.php'; // Debug the POST
$url = 'http://www.skelbiu.lt/users/signin';
$referer = 'http://www.skelbiu.lt/';
// POST data
$post_data = array (
    'nick' => '+37064379063',
    'password' => 'QyJaeu',
    'step' => 1
); // POST data
// build query
$query = http_build_query($post_data); // Paprastam application/x-www-form-urlencoded, ne multi-form
// login action
$html = cURL_post($url, $referer, $UA, $query, $ch); // login action
echo($html[1]); // show that the login works
unset($query);

// Close the connection
curl_close($ch);