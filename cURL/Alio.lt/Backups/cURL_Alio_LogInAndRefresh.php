<?php

include_once(DOCROOT . 'simple_html_dom.php');

function getUA(){
    $userAgent = array( // See more @http://techblog.willshouse.com/2012/01/03/most-common-user-agents/
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36", // Chrome 39.0 Win7 64-bit
        "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0", // Firefox 34.0 Win7 64-bit
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36", // Chrome 39.0 MacOSX
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5" // Safari 8.0 MacOSX
    );
    return $userAgent[rand(0,max(array_keys($userAgent)))];
} // Randominis User-Agent:
function cURL_ping_html($url, $referer, $UA, $ch){
    curl_setopt_array($ch, array(
            CURLOPT_URL => $url, //Set the URL to work with
            CURLOPT_USERAGENT => $UA,
            CURLOPT_REFERER => $referer,
            CURLOPT_RETURNTRANSFER => 1, /*Setting CURLOPT_RETURNTRANSFER variable to 1 will force cURL not to print out the results of its query.
                                   Instead, it will return the results as a string return value from curl_exec() instead of the usual true/false.
                                   Nelabai taip: 1 stores the info, 0 straightly does 'echo curl_exec($ch);'*/
            CURLOPT_FOLLOWLOCATION => 1, //Set this to allow the possible redirection of "Location: ..." in the return header
            CURLOPT_POST => 0, // we are not doing a POST request, just getting html
            //CURLOPT_NOBODY => 1, // we only need the cookies etc, not the html
            CURLOPT_COOKIEJAR => 'cookie.txt', //Handle cookies for the login
            CURLOPT_COOKIEFILE => 'cookie.txt' // realpath('cookie.tx') ??
        )
    );

    $result['EXE'] = curl_exec($ch);
    $result['INF'] = curl_getinfo($ch);
    $result['ERR'] = curl_error($ch);
    //curl_close($ch);
    $info = array();
    if (empty($result['ERR'])) {
        $info[0] = "ok";
        $info[1] = $result['EXE'];
        $info[2] = $result['INF'];
    } else {
        $info[0] = "error";
        $info[1] = $result['ERR'];
        $info[2] = $result['INF'];
    }
    return $info;
} // Gaunam pradinį kartu su cookies.
function cURL_post($url, $referer, $UA, $postoTurinys, $ch, $headers=''){
    if ($headers != ''){
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    }
    curl_setopt_array($ch, array(
            CURLOPT_URL => $url, //Set the URL to work with
            CURLOPT_REFERER => $referer, // Iš kur mus čia atsiuntė
            CURLOPT_USERAGENT => $UA,
            CURLOPT_RETURNTRANSFER => 1, /*Setting CURLOPT_RETURNTRANSFER variable to 1 will force cURL not to print out the results of its query.
                                   Instead, it will return the results as a string return value from curl_exec() instead of the usual true/false.
                                   Nelabai taip: 1 stores the info, 0 straightly does 'echo curl_exec($ch);'*/
            CURLOPT_FOLLOWLOCATION => 1, //Set this to allow the possible redirection of "Location: ..." in the return header
            CURLOPT_POST => 1, // we are doing a POST request
            CURLOPT_POSTFIELDS => $postoTurinys, //Set the post parameters
            CURLOPT_COOKIEJAR => 'cookie.txt', //Handle cookies for the loginCURLOPT_FILE => "@$file"
            CURLOPT_COOKIEFILE => 'cookie.txt',
            CURLOPT_AUTOREFERER => 1
        )
    );

    $result['EXE'] = curl_exec($ch);
    $result['INF'] = curl_getinfo($ch);
    $result['ERR'] = curl_error($ch);
    $info = array();
    if (empty($result['ERR'])) {
        $info[0] = "ok";
        $info[1] = $result['EXE'];
        $info[2] = $result['INF'];
    } else {
        $info[0] = "error";
        $info[1] = $result['ERR'];
        $info[2] = $result['INF'];
    }
    return $info;
} // Sušeriam kokiai tai formai info.

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
    'password' => 'pwpw',
    'userphone' => 'lilymaster@gmail.com'
); // POST data


$post_data = array (
    'login' => 1,
    'password' => 'kycago',
    'userphone' => '869621118'
); // POST data



// build query
$query = http_build_query($post_data); // Paprastam application/x-www-form-urlencoded, ne multi-form
// login action
$html = cURL_post($url, $referer, $UA, $query, $ch); // login action
//echo($html[1]); // show that the login works

// atidarom skelbimų psl
//$url = 'http://www.alio.lt/public/userAdvertisements/advertisementsList.html?page=1';

//$html = cURL_ping_html($url, $referer, $UA, $ch);
// surandam, kuriuos skelbimus reikia atnaujinti //TODO o kaip su daugiau psl atnaujinimui?

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
    echo $html[1];

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
            echo "erroras rastas " . $psl . " psl. Baigtas skaiciavimas";
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
echo $url;
$html = cURL_ping_html($url, $referer, $UA, $ch); // lets do the atnaujinimas!

// logout page settings
$url = 'http://www.alio.lt/atsijungimas.html';
$referer = 'http://www.alio.lt/mano_skelbimai.html';
$html = cURL_ping_html($url, $referer, $UA, $ch); // logout action
//echo($html[1]); // show that the logout works

// Close the connection
curl_close($ch);
//http://www.alio.lt/public/advertisement/renew.html?categoryId=&ad_id=51905565,51905563&page=1
//curl_close($ch);