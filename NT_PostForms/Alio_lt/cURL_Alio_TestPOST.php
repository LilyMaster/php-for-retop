<?php

include_once(DOCROOT . 'simple_html_dom.php');

function echocURLInfo($ch) {
    echo '<pre>';
    $info = curl_getinfo($ch);
    print_r($info);
    echo '</pre>';
}

function prePrintR($text){
    echo "<pre>";
    print_r($text);
    echo "</pre>";
}

function getUA(){
    $userAgent = array( // See more @http://techblog.willshouse.com/2012/01/03/most-common-user-agents/
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36", // Chrome 39.0 Win7 64-bit
        "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0", // Firefox 34.0 Win7 64-bit
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36", // Chrome 39.0 MacOSX
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5" // Safari 8.0 MacOSX
    );
    return $userAgent[rand(0,max(array_keys($userAgent)))];
}
$UA = getUA(); // Nustatome "User-Agent: "

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

function get($url, $referer, $UA, $ch){
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
function post($url, $referer, $UA, $postoTurinys, $ch, $header = array()){
    if (isset($header)){
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
    }
    curl_setopt_array($ch, array(
            CURLOPT_URL => $url, //Set the URL to work with
            CURLOPT_REFERER => $referer, // Iš kur mus čia atsiuntė
            CURLOPT_USERAGENT => $UA,
            CURLOPT_RETURNTRANSFER => 1, /*Setting CURLOPT_RETURNTRANSFER variable to 1 will force cURL not to print out the results of its query.
                                   Instead, it will return the results as a string return value from curl_exec() instead of the usual true/false.
                                   Nelabai taip: 1 stores the info, 0 straightly does 'echo curl_exec($ch);'*/
            CURLOPT_FOLLOWLOCATION => 1, //Set this to allow the possible redirection of "Location: ..." in the return header
            CURLOPT_HEADER => 1, // For when we need the HTTP Header returned
            CURLINFO_HEADER_OUT => 1, // Išeinančios užklausos headeris
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




$ch = curl_init();
$url = 'http://alio.lt';
$referer = 'http://alio.lt';

/*$gotHTML = get($url, $referer, $UA, $ch);
echo $gotHTML[1];*/

$url = 'ssj.uzrasai.lt/manowebas/cURL%20Testing%20Grounds/Test1/POST_Debug.php';
//$url = 'http://www.alio.lt/jungiamasi.html';
$referer = 'http://www.alio.lt/prisijungimas.html';


//$header = array("Content-Type:application/x-www-form-urlencoded");
$header = array("Content-Type:multipart/form-data");

// php >= 5.5
//$file = curl_file_create('testfile.jpg', 'image/jpeg', "test_file_name");

$post_data = array (
    'showgooglemaps' => 1,
    'gm_lat' => 54.68939,
    'gm_lng' => 25.280020000000036,
    'house_number' => '',
    'data' => array(
        'id' => array(
            'adresas_1' => 228822, // Miestas
            'adresas_2' => '', // Savivaldybė
            'adresas_3' => '', // Gatvė
            'kambariu_skaicius_1' => 100018877, // Kambarių skaičius
            'busto_bukle' => 100009023,
            'buto_aukstas_1' => 100018897,
            'nt_butai_bukle_nuomoja' => 126702302,
            'aukstu_skaicius_pastate_1' => 100018896,
            'ypatybes' => array(
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
            'nuomotojas' => 100011023
        ),
        'text' => array(
            'kitos_pastabos' => 'Kitos pastabos tekstas', // Skelbimo tekstas
            'busto_plotas_m_1' => 32,
            'statybos_metai' => 2007,
            'kaina_1' => 1234, // Eurais
            'kaina_4' => 4261, // Litais
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
        'email' => 'el.pastas@gmail.com'
    ),
    'ntspecial' => 0, // Ar Su patentu, ar asmeniškai, ar įmonė turbūt
    'isEdit' => '',
    'isCreate' => 1,
    'comment' => 1, // Ar leidžiama komentuoti
    'ad_id' => 51875342, // TODO Gauti AD ID
    'category_id' => 1393
);

$query = http_build_query($post_data);
http_build_query_for_curl($post_data, $query);

/*'foto' => array(
        "filename" => null
    )*/

// pradedamas cURL
//$ch = curl_init();
/*curl_setopt_array($ch, array(
        CURLOPT_URL => $url,
        CURLOPT_USERAGENT => $UA,
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_FOLLOWLOCATION => 1,
        CURLOPT_POST => 0, // we are doing a POST request
        CURLOPT_POSTFIELDS => $post_data,
        CURLOPT_COOKIEJAR => 'cookie.txt'
    )
);
*/

//$file = "/tempfile.jpg";

/*
curl_setopt_array($ch, array(
    CURLOPT_URL => $url, //Set the URL to work with
    CURLOPT_REFERER => $referer, // Iš kur mus čia atsiuntė
    //CURLOPT_HTTPHEADER => $headers,
    //CURLOPT_HEADER => 1, // For when we need the HTTP Header returned
    //CURLINFO_HEADER_OUT => 1, // Išeinančios užklausos headeris
    CURLOPT_USERAGENT => $UA,
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_FOLLOWLOCATION => 1, //Set this to allow the possible redirection of "Location: ..." in the return header
    CURLOPT_POST => 1, // we are doing a POST request
    CURLOPT_POSTFIELDS => $query, //Set the post parameters
    CURLOPT_COOKIEJAR => 'cookie.txt', //Handle cookies for the loginCURLOPT_FILE => "@$file"
    CURLOPT_COOKIEFILE => 'cookie.txt',
    CURLOPT_AUTOREFERER => 1
    )
);

//execute the request (the login)
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
//return $info;

// debug
//prePrintR($info[1]);
//echocURLInfo($ch);

//prePrintR($post_data);

*/

$html = post($url, $referer, $UA, $query, $ch); // login action
//$html = post($url, $referer, $UA, $post_data, $ch); // login action
echo($html[1]); // show that the login works

/*
$url = 'http://www.alio.lt/atsijungimas.html';
$referer = 'http://www.alio.lt/mano_skelbimai.html';
$html = post($url, $referer, $UA, $query, $ch); // logout action
echo($html[1]); // show that the logout works*/

// Close the connection
curl_close($ch);