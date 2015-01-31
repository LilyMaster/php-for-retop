<?php

// Veikia~
$URL = 'http://ssj.uzrasai.lt/manowebas/SkaiciuojamRuleteSuForma.php';

$lubos = 50;
$statymas = 0.1;
$bandymuSkaicius = 500;

//echo var_dump($username, $password, $loginUrl);

//init curl
$ch = curl_init();

//Set the URL to work with
curl_setopt($ch, CURLOPT_URL, $URL);

// ENABLE HTTP POST
curl_setopt($ch, CURLOPT_POST, 1);

//Set the post parameters
//curl_setopt($ch, CURLOPT_POSTFIELDS, 'userphone='.$username.'&password='.$password);
curl_setopt($ch, CURLOPT_POSTFIELDS, 'lubos='.$lubos.'&statymas='.$statymas.'&bandymuSkaicius='.$bandymuSkaicius);

//Handle cookies for the login
//curl_setopt($ch, CURLOPT_COOKIEJAR, 'cookie.txt');

//Setting CURLOPT_RETURNTRANSFER variable to 1 will force cURL
//not to print out the results of its query.
//Instead, it will return the results as a string return value
//from curl_exec() instead of the usual true/false.
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// 1 stores the info, 0 straightly does 'echo curl_exec($ch);'

//Set this to allow the possible redirection of "Location: ..."
//in the return header.
//curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);

// we need the HTTP Header returned
curl_setopt($ch, CURLOPT_HEADER, 1);

//execute the request (the login)
$store = curl_exec($ch);
print_r($store);

echocURLInfo($ch);

//the login is now done and you can continue to get the
//protected content.

//set the URL to the protected file
//curl_setopt($ch, CURLOPT_URL, 'http://www.example.com/protected/download.zip');

if (curl_error($ch)) {
    echo curl_error($ch);
}

//echo "this is after all execs " . $ch;
curl_close($ch);