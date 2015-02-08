<?php
define('DOCROOT', realpath(dirname(__FILE__)).'/');
include_once(DOCROOT . '/simple_html_dom.php');
include_once(DOCROOT . '/../includes/cURL_functions.php');

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

$ch = curl_init();

// Get initial cookies
$url = 'http://alio.lt';
$referer = 'http://alio.lt';
$html = cURL_ping_html($url, $referer, $UA, $ch);
//echo $gotHTML[1];

//$url = 'ssj.uzrasai.lt/manowebas/cURL%20Testing%20Grounds/Test1/POST_Debug.php'; // Debug the POST
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
$url = 'http://www.alio.lt/iveskite_skelbima.html?id=1553'; // TODO skirtingos kategorijos, ne tik kamb. nuoma
$referer = 'http://alio.lt/mano_skelbimai.html';
$html = cURL_ping_html($url, $referer, $UA, $ch);

$skelbimoID = 0;
if ($html[0] == "ok") {
    $htmlDOM = str_get_html($gotHTML[1]);
    $gautasHTML_Istrauka = $htmlDOM->find('input[name=ad_id]');
    if (isset($gautasHTML_Istrauka[0]->value)) {
        $skelbimoID = $gautasHTML_Istrauka[0]->value;
        //return $skelbimoID;
    } else {
        echo "Nėra nurodyto vardo";
    }
}

// php >= 5.5
//$file = curl_file_create('testfile.jpg', 'image/jpeg', "test_file_name");

$post_data = array (
    'showgooglemaps' => 0,
    'gm_lat' => 50.68939, // TODO gauti koordinates, geriausiu atveju - kliento pusėje: https://developers.google.com/maps/documentation/geocoding/?csw=1
    'gm_lng' => 40.28002,
    'house_number' => '45',
    'data' => array(
        'id' => array(
            'adresas_1' => 229001, // Miestas Šiauliai //TODO Išrinkti visus miestų ir adresų kodus
            'adresas_2' => 250582, // Savivaldybė Šiaulių
            'adresas_3' => 17620, // Gatvė K. Korsako
            'kambariu_skaicius_1' => 100018876, // Kambarių skaičius
            'busto_bukle' => 100009022,
            'buto_aukstas_1' => 100018894,
            'nt_butai_bukle_nuomoja' => 126702312,
            'aukstu_skaicius_pastate_1' => 100018895,
            'ypatybes' => array( //TODO Išrinkti visus ypatybių kodus // Ypatybės įtraukiamos tik tuomet, jei pažymimos. Kaži, ar eiliškumas svarbu.
                0 => 100011151,
                1 => 100011148,
                2 => 100011155,
                3 => 100011157,
                4 => 100011150,
                5 => 100011152
            ),
            'iranga' => array(
                0 => 100011176,
                1 => 100011185,
                2 => 100011183,
                3 => 100011177,
                4 => 100011180,
                5 => 100011173,
                6 => 100011182
            ),
            'sildymas_1' => 119906742,
            'sildymas_2' => 100021913,
            'nuomotojas' => 100011023 // TODO gauti nuomotojo ID (privatus ar įmonė, etc.)
        ),
        'text' => array(
            'kitos_pastabos' => 'Nedidelis butukas šalia Akropolio.', // Skelbimo tekstas
            'busto_plotas_m_1' => 32,
            'statybos_metai' => 1985,
            'kaina_1' => 850, // Eurais
            'kaina_4' => 2762, // Litais
            'kaina_2' => 'EUR',
            'mobilus_telefonas' => 68743214
        ),
        'ypatybes' => array(
            0 => ''
        ),
        'iranga' => array(
            0 => ''
        )
    ),
    'video_id' => '725WlG1idPc', // YouTube video ID
    'packet' => array( //Mokamos paslaugos?
        43 => array(
            'price' => 59212,
        ),
        'value' => array(
            'mini_packet' => 0,
            'optimal_packet' => 0,
            'vip_packet' => 0
        ),
        44 => array(
            'price' => 59222,
        ),
        45 => array(
            'price' => 59232,
        ),
        104 => array(
            'price' => 61182,
        ),
        105 => array(
            'price' => 61192,
        ),
        117 => array(
            'price' => 61432,
        )
    ),
    'expire_time' => '',
    'current_time' => 1421260843, // TODO Gauti laiko kintamąjį
    'siteadvertise' => array(
        'value' => array(
            104 => 0,
            105 => 0,
            117 => 0
        )
    ),
    'mail' => array(
        'email' => 'lilymaster@gmail.com'
    ),
    'ntspecial' => 0, // Ar Su patentu, ar asmeniškai, ar įmonė turbūt
    'isEdit' => '',
    'isCreate' => 1,
    'comment' => 1, // Ar leidžiama komentuoti
    'ad_id' => $skelbimoID,
    'category_id' => 1393 // TODO Gauti skelbimų kodus (kategorijos)
);

//$query = http_build_query($post_data);
//echo $query . "\n";
unset($query);
http_build_query_for_curl($post_data, $query);


/* //Debug action
echo "<pre>";
print_r($query); echo"\n";

curl_setopt_array($ch, array(
    CURLOPT_HEADER => 1,
    CURLINFO_HEADER_OUT => 1)
); */


 //$url = 'ssj.uzrasai.lt/manowebas/cURL%20Testing%20Grounds/Test1/POST_Debug.php'; // Debug the POST
$url = 'http://www.alio.lt/public/advertisement/save.html';
$referer = 'http://www.alio.lt/iveskite_skelbima.html?id=1553';


$html = cURL_post($url, $referer, $UA, $query, $ch); // post action
echo($html[1]); // show that the post works

// logout page settings
$url = 'http://www.alio.lt/atsijungimas.html';
$referer = 'http://www.alio.lt/mano_skelbimai.html';
$html = cURL_ping_html($url, $referer, $UA, $ch); // logout action
echo($html[1]); // show that the logout works

// Close the connection
curl_close($ch);