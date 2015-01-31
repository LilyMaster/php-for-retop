<?php

include_once(DOCROOT . '/../includes/simple_html_dom.php');
include_once(DOCROOT . '/../includes/cURL_functions.php');

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


/*$post_data = array (
    'login' => 1,
    'password' => 'kycago',
    'userphone' => '869621118'
); // POST data*/



// build query
$query = http_build_query($post_data); // Paprastam application/x-www-form-urlencoded, ne multi-form
// login action
$html = cURL_post($url, $referer, $UA, $query, $ch); // login action
//echo($html[1]); // show that the login works

// atidarom skelbimų psl
//$url = 'http://www.alio.lt/public/userAdvertisements/advertisementsList.html?page=1';

//$html = cURL_ping_html($url, $referer, $UA, $ch);
// surandam, kuriuos skelbimus reikia atnaujinti

/*function hTTp_getIDs($dom_html){
    if ($dom_html[0] == "ok") {
        $dom_html = str_get_html($dom_html[1]);
        $gautasHTML_Istrauka = $dom_html->find('input[name=advertise_id]');
        if (isset($gautasHTML_Istrauka[0]->value)) {
            for ($i = 0; $i <= count($gautasHTML_Istrauka)-1; $i++){
                $skelbimuIDs[] = $gautasHTML_Istrauka[$i]->value;
                //var_dump($skelbimuIDs);
            }
            //print_r($skelbimuIDs);
            //echo($gautasHTML_Istrauka[0]->value);
        } else {
            echo "Nėra nurodyto vardo";
        }
    }
    return $skelbimuIDs;
} // ištraukimas IDs į array*/ // pilna funkcija hTTp_getIDs

$skelbimuIDs = array();
$psl = 1;
$referer = 'http://www.alio.lt/mano_skelbimai.html';
$yraErroras = false;

/*$url = 'http://www.alio.lt/public/userAdvertisements/advertisementsList.html?page='.$psl;
$html = cURL_ping_html($url, $referer, $UA, $ch);
echo $html[1];*/


do {
    $url = 'http://www.alio.lt/public/userAdvertisements/advertisementsList.html?page='.$psl;
    $html = cURL_ping_html($url, $referer, $UA, $ch);
    //echo $html[1];

    if ($html[0] == "ok") {
        $dom_html = str_get_html($html[1]);

        $yraErroras = isset($dom_html->find('div.error', 0)->innertext);
        if (!$yraErroras){
            echo "Erroro nera, skaiciuojam toliau. Dabar matomas ir apdorojamas psl ".$psl."<br/>";
            $gautasHTML_Istrauka = $dom_html->find('input[name=advertise_id]');
            if (isset($gautasHTML_Istrauka[0]->value)) {
                for ($i = 0; $i <= count($gautasHTML_Istrauka)-1; $i++){
                    $skelbimuIDs[] = $gautasHTML_Istrauka[$i]->value;
                }
            }
        } else {
            echo "Paskutinis rastas " . $psl . " psl. Baigtas skaiciavimas";
        }
    }

    $referer = $url;
    $psl++;
} while (!$yraErroras); // galima padaryti "while ($psl <= $norimasDarApdorotiPsl);"

var_dump($skelbimuIDs);

function build_skelbimuIDs_atnaujinimui($skelbimuIDs){
    $url = 'http://www.alio.lt/public/advertisement/renew.html?categoryId=&ad_id=';
    $url .= implode($skelbimuIDs, ",");
    //echo $url."<br/>";
    //$url .= '&page=1';
    return $url;
}




//atnaujinami skelbimai pagal IDs
$url = build_skelbimuIDs_atnaujinimui($skelbimuIDs);
$referer = 'http://www.alio.lt/mano_skelbimai.html';
//echo $url;
//$html = cURL_ping_html($url, $referer, $UA, $ch); // lets do the atnaujinimas!

// logout page settings
$url = 'http://www.alio.lt/atsijungimas.html';
$referer = 'http://www.alio.lt/mano_skelbimai.html';
$html = cURL_ping_html($url, $referer, $UA, $ch); // logout action
//echo($html[1]); // show that the logout works

// Close the connection
curl_close($ch);
//http://www.alio.lt/public/advertisement/renew.html?categoryId=&ad_id=51905565,51905563&page=1
//curl_close($ch);