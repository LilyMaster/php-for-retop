<?php

define('DOCROOT', realpath(dirname(__FILE__)).'/');
define('WEBROOT', $_SERVER['DOCUMENT_ROOT'].'/');
include_once(WEBROOT . 'includes/simple_html_dom.php');
include_once(WEBROOT . 'includes/php_functions.php');

$UA = getUA(); // Nustatome "User-Agent: "

$ch = curl_init();

// Get initial cookies
$url = 'http://plius.lt';
$referer = 'http://plius.lt';
$html = cURL_ping_html($url, $referer, $UA, $ch);
//echo $ghtml[1];

//$url = 'ssj.uzrasai.lt/manowebas/cURL%20Testing%20Grounds/Test1/POST_Debug.php'; // Debug the POST
$url = 'http://www.plius.lt/pasas/registracija';
$referer = 'http://www.plius.lt/';
// POST data
$post_data = array (
    'is_login' => 1,
    'login_name' => 'lilymaster@gmail.com',
    'login_password' => 'manopw'
); // POST data
// build query
$query = http_build_query($post_data); // Paprastam application/x-www-form-urlencoded, ne multi-form
// login action
$html = cURL_post($url, $referer, $UA, $query, $ch); // login action
echo($html[1]); // show that the login works
unset($query);

// logout page settings
$url = 'http://www.plius.lt/?logout=1';
$referer = 'http://www.plius.lt/';
$html = cURL_ping_html($url, $referer, $UA, $ch); // logout action
//echo($html[1]); // show that the logout works






// Close the connection
curl_close($ch);