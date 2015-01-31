<?php
function get($url, $refer, $ch)
{
    curl_setopt ($ch, CURLOPT_URL,$url);
    curl_setopt ($ch, CURLOPT_POST, 0);
    curl_setopt ($ch, CURLOPT_COOKIEJAR, realpath('cookie.txt')); // cookie.txt
    curl_setopt ($ch, CURLOPT_COOKIEFILE, realpath('cookie.txt'));
    curl_setopt ($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt ($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (X11; U; Linux i586; de; rv:5.0)         Gecko/20100101 Firefox/5.0');
    curl_setopt ($ch, CURLOPT_REFERER, $refer);
    $result= curl_exec($ch);
    return $result;
}
function post($url, $refer, $parametros, $ch)
{
    curl_setopt ($ch, CURLOPT_URL,$url);
    curl_setopt ($ch, CURLOPT_POST, 1);
    curl_setopt ($ch, CURLOPT_POSTFIELDS, $parametros);
    curl_setopt ($ch, CURLOPT_COOKIEJAR, realpath('cookie.txt')); // cookie.txt 
    curl_setopt ($ch, CURLOPT_COOKIEFILE, realpath('cookie.txt'));
    curl_setopt ($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt ($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (X11; U; Linux i586; de; rv:5.0) Gecko/20100101 Firefox/5.0');
    curl_setopt ($ch, CURLOPT_REFERER, $refer);
    $result= curl_exec($ch);
    return $result;
}
function work() {
    $ch = curl_init();
    /* STEP 1. Visit main site to create required cookies */
    get ("http://www.i2ocr.com/", "http://www.i2ocr.com/", $ch);

//STEP 2. Fill the data required for POST
    $data = array(
        'i2ocr_options' => 'url',
        'i2ocr_uploadedfile' => '',
        'i2ocr_url' => 'http://www.murraydata.co.uk/wp-content/uploads/2013/02/ocr-font-    500x220.jpg',
        'i2ocr_languages' => 'gb,eng'
    );
    $data2 = http_build_query($data);

//STEP 3. Display the resulting page
    echo post ("http://www.i2ocr.com/process_form", "http://www.i2ocr.com/", $data2, $ch);
}
work();
?>