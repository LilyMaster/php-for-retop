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

// Get posting cookies
$url = 'http://www.plius.lt/redaguoti/nekilnojamasis-turtas/butu-nuoma'; // TODO skirtingos kategorijos, ne tik butų nuoma
$referer = 'http://www.plius.lt';
$html = cURL_ping_html($url, $referer, $UA, $ch);
echo $html[1];

$skelbimoID = 0;
if ($html[0] == "ok") {
    $htmlDOM = str_get_html($html[1]);
    $gautasHTML_Istrauka = $htmlDOM->find('input[name=browser_tab]');
    if (isset($gautasHTML_Istrauka[0]->value)) {
        $skelbimoID = $gautasHTML_Istrauka[0]->value;
        //echo $skelbimoID;
    } else {
        echo "Nėra nurodyto vardo";
    }
}

/*
// čia nuotraukos
// php >= 5.5
$url = 'http://www.plius.lt/upload.php';
$referer = "http://www.plius.lt/redaguoti/nekilnojamasis-turtas/butu-nuoma?browser_tab=$skelbimoID&";

$dir = DOCROOT . 'images/'; // Iš kur imami paveiksliukai
$visiFailai = array_slice(scandir($dir), 2);
foreach ($visiFailai as $failas){
    $ext = pathinfo($dir . $failas, PATHINFO_EXTENSION);
    switch ($ext) {
        case 'jpg':
        case 'jpeg':
            $mime = 'image/jpeg';
            break;
        case 'gif':
            $mime = 'image/gif';
            break;
        case 'png':
            $mime = 'image/png';
            break;
        default:
            $mime = 'application/octet-stream';
            echo "\n Image type not known \n";
    }
    //$url = 'http://www.alio.lt/public/photos/uploadifyupload.html?id=' . $skelbimoID;
    $cfile = curl_file_create($dir . "$failas", $mime, "$failas");
    //$cfile = curl_file_create("cats.jpg",'image/jpeg',"satohasdltua.jpg");
    $query = array(
        'form_is_posted' => 1,
        'browser_tab' => $skelbimoID,
        'Filedata' => $cfile);
    $html = cURL_post($url, $referer, $UA, $query, $ch); // post action
    unset($query);
}
*/


// čia pats skelbimas
$post_data = array (
    'form_is_posted' => 1,
    'selected_category' => 729,
    'fk_data_ann_categories_id' => 729,
    'deleting_ann' => 0,
    'browser_tab' => $skelbimoID,
    'page_nr' => 1,
    'user_is_legal' => 0, // ar privatus = 0, ar juridinis = 1
    'contacts_name' => 'Vardas Pavardauskas',
    'contacts_phone' => 37060012345,
    'action_type' => 3,
    'address_1' => 259, // Miestas
    'address_2' => '3_125', // Rajonas
    'address_3' => 16819, // Gatvė
    'address_building_number' => 85, // Namo nr
    'flat_size' => 75, // Kvadratūra
    'construction_type_id' => 17824, // Blokinis ar pan.
    'flat_rooms' => 2, // Kambarių bute
    'estate_condition_id' => 17830,
    'flat_floor' => 3, // Aukštas
    'building_heating_id' => 17836, // Šildymo tipas - centrinis ar pan.
    'building_floors' => 5, // Aukštų name
    'building_build_date' => 1975, // Statybos metai
    'building_reconstruction_date' => 2004, // building_reconstruction_d... ??
    'heating_taxes' => 200, // mokesčiai už šildymą
    'other_taxes' => 100, // komunaliniai mokesčiai
    'comments_lt' => 'Didelis butukas', // Skelbimo aprašymas
    'sell_price_eur' => 654, // Kaina
    'f3' => 1, // Papildomos varnėlės |.|
    'f5' => 1,
    'f10' => 1,
    'f11' => 1,
    'f13' => 1,
    'MAX_FILE_SIZE' => 6291456, // tik teorinis?
    'Filedata[]"; filename=""'."\r\n".'Content-Type: application/octet-stream' => '',
    'video_url' => '',
    'video_uploaded' => '',
    'has_video' => ''/*,
    'save' => 'Išsaugoti'*/
);

$query = $post_data; // nereikia encodinti niekur, nes reikia form-data

//$url = 'ssj.uzrasai.lt/manowebas/cURL%20Testing%20Grounds/Test1/POST_Debug.php'; // Debug the POST
$url = "http://www.plius.lt/redaguoti/nekilnojamasis-turtas/butu-nuoma?browser_tab=$skelbimoID&";
$referer = "http://www.plius.lt/redaguoti/nekilnojamasis-turtas/butu-nuoma?browser_tab=$skelbimoID&";
// $header = array("Content-Type:application/octet-stream");
$html = cURL_post($url, $referer, $UA, $query, $ch/*, $header*/); // post action
echo($html[1]); // show that the post works
unset($query);

/*$url = "http://www.plius.lt/redaguoti/patvirtinti?browser_tab=$skelbimoID";
$html = cURL_ping_html($url, $referer, $UA, $ch); // post action
echo($html[1]); // show that the post works*/

$post_data = array (
    'goback' => 0,
    'form_is_posted' => 1,
    'create' => 'Dėti skelbimą'
);
$query = $post_data;

$url = "http://www.plius.lt/redaguoti/patvirtinti?browser_tab=$skelbimoID";
$html = cURL_post($url, $referer, $UA, $query, $ch); // post action
echo($html[1]); // show that the post works
unset($query);

// logout page settings
$url = 'http://www.plius.lt/?logout=1';
$referer = 'http://www.plius.lt/';
$html = cURL_ping_html($url, $referer, $UA, $ch); // logout action
//echo($html[1]); // show that the logout works

// Close the connection
curl_close($ch);