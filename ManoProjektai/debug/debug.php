<?php

error_reporting(E_ALL);
ini_set("display_errors", 1);

define('DOCROOT', realpath(dirname(__FILE__)) . '/');
define('WEBROOT', $_SERVER['DOCUMENT_ROOT'] . '/');

include_once(WEBROOT . 'includes/simple_html_dom.php');
include_once(WEBROOT . 'includes/php_functions.php');

echo DOCROOT."\n";
echo WEBROOT."\n";

function http_build_query_for_curl( $arrays, &$new = array(), $prefix = null ) {

    if ( is_object( $arrays ) ) {
        $arrays = get_object_vars( $arrays );
    }

    foreach ( $arrays as $key => $value ) {
        $k = isset( $prefix ) ? $prefix . '[' . $key . ']' : $key;
        if ( is_array( $value ) OR is_object( $value )  ) {
            http_build_query_for_curl( $value, $new, $k );
        } else {
            $new[$k] = $value;
        }
    }
}

$UA = getUA(); // Nustatome "User-Agent: "
echo $UA;
$ch = curl_init();

$url = 'http://alio.lt';
$referer = 'http://alio.lt';
$html = cURL_ping_html($url, $referer, $UA, $ch);
echo $html[1];


curl_close($ch);

echo "curl works?";