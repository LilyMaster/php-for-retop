<?php

function GetPage2($url, $timeout, $client, $proxy="", $proto=""){
    if(isset($proto)){
        switch($proto){
            case "HTTP":
                $proto = "CURLPROXY_HTTP";
                break;
            case "SOCKS4":
                $proto = "CURLPROXY_SOCKS5";
                break;
            case "SOCKS5":
                $proto = "CURLPROXY_SOCKS5";
                break;
            default:
                $proto = "CURLPROXY_HTTP";
                break;
        }
    }
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,$url);
    if(isset($proxy) && $proxy != ""){
        curl_setopt($ch, CURLOPT_PROXY, $proxy);
        curl_setopt($ch, CURLOPT_PROXYTYPE, $proto);
    }
    curl_setopt($ch, CURLOPT_USERAGENT, $client);
    //curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
    //curl_setopt($ch, CURLOPT_HTTPPROXYTUNNEL, 1);
    curl_setopt($ch, CURLOPT_HEADER, 1);
    $result['EXE'] = curl_exec($ch);
    $result['INF'] = curl_getinfo($ch);
    $result['ERR'] = curl_error($ch);
    curl_close($ch);
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