<?php

// Get cURL resource
$ch = curl_init();
// Set some options - we are passing in a useragent too here
curl_setopt_array($ch, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'http://testcURL.com',
    CURLOPT_USERAGENT => 'Codular Sample cURL Request',
    CURLOPT_POST => 1,
    CURLOPT_POSTFIELDS => array(
        "item1" => 'value',
        "item2" => 'value2'
    )
));
// Send the request & save response to $resp
$resp = curl_exec($ch);
// Close request to clear up some resources
curl_close($ch);