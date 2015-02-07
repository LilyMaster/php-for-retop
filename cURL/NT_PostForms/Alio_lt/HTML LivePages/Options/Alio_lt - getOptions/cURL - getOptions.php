<?php

define('DOCROOT', realpath(dirname(__FILE__)).'/'); echo DOCROOT."\n";
define('WEBROOT', $_SERVER['DOCUMENT_ROOT'].'/'); echo WEBROOT;
include_once(WEBROOT . 'includes/simple_html_dom.php');
include_once(WEBROOT . 'includes/cURL_functions.php');



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

$miestai = array(
    'DidMiestai' => array(228626, 228822, 229085, 229001, 229153, 228709, 229063), // Miestai
    'AdmVienetai' => array(228949, 228713, 229189, 228884, 229114, 228710, 228662, 229200, 228787, 228957, 229044, 228871, 228915, 228834, 228887, 228980, 229064, 229076, 229123, 228809, 228725, 228892, 228776, 229213, 229097, 229056, 228992, 229154, 229130, 228760, 228797, 229004, 228858, 228754, 229142, 229087, 229020, 228742, 228648, 228598, 229167, 228698, 228902, 228672, 229225, 229178, 228920, 228584, 228968, 229029, 229098, 228575, 228611) // Rajonai
    //,array(91, 92, 153, 353373) //Kitos šalys - ir taip gerai
);

//$miestai[0] = array(228822, 229063);
/*print_r($miestai[0]);
echo "\n";
print_r($miestai[1]);*/

$UA = getUA(); // Nustatome "User-Agent: "
$ch = curl_init();

// Get initial cookies
$url = 'http://alio.lt';
$referer = 'http://alio.lt';
$html = cURL_ping_html($url, $referer, $UA, $ch);
//echo $gotHTML[1];

/*//$url = 'ssj.uzrasai.lt/manowebas/cURL%20Testing%20Grounds/Test1/POST_Debug.php'; // Debug the POST
$url = 'http://www.alio.lt/jungiamasi.html';
$referer = 'http://www.alio.lt/prisijungimas.html';
// POST data
$post_data = array (
    'login' => 1,
    'password' => 'kiaule',
    'userphone' => 'lilymaster@gmail.com'
); // POST data
// build query
$query = http_build_query($post_data); // Paprastam application/x-www-form-urlencoded, ne multi-form
// login action
$html = cURL_post($url, $referer, $UA, $query, $ch); // login action
echo($html[1]); // show that the login works

//$header = array("Content-Type:application/x-www-form-urlencoded");
//$header = array("Content-Type:multipart/form-data");

// Get posting cookies
$url = 'http://www.alio.lt/iveskite_skelbima.html?id=1553';
$referer = 'http://alio.lt/mano_skelbimai.html';
$html = cURL_ping_html($url, $referer, $UA, $ch);

// php >= 5.5
//$file = curl_file_create('testfile.jpg', 'image/jpeg', "test_file_name");*/
//$query = '';

foreach($miestai['DidMiestai'] as $miestoID){
    $post_data = array (
        'id' => '',
        'values[]' => $miestoID
    );
    $url = 'http://www.alio.lt/addressgetSimple.html?'; //Pirmasis pasirinkimas
    $url .= http_build_query($post_data);
    $html = cURL_ping_html($url, $referer, $UA, $ch); // post action
    //echo $url.'\n';
    $failas = fopen(DOCROOT . "Seniunija/$miestoID.json", "w");;
    fwrite($failas, $html[1]);
    fclose($failas);
}

foreach($miestai['AdmVienetai'] as $miestoID){
    $post_data = array (
        'id' => '',
        'values[]' => $miestoID
    );
    $url = 'http://www.alio.lt/addressgetSimple.html?'; //Pirmasis pasirinkimas
    $url .= http_build_query($post_data);
    $html = cURL_ping_html($url, $referer, $UA, $ch); // post action
    //echo $url.'\n';
    $failas = fopen(DOCROOT . "Seniunija/$miestoID.json", "w");;
    fwrite($failas, $html[1]);
    fclose($failas);
}

// Close the connection
curl_close($ch);