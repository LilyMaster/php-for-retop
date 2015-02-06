<?php

define('DOCROOT', realpath(dirname(__FILE__)) . '/');
define('WEBROOT', $_SERVER['DOCUMENT_ROOT'] . '/');
include_once(WEBROOT . 'includes/simple_html_dom.php');
include_once(WEBROOT . 'includes/cURL_functions.php');

echo '<pre>';

$dir = DOCROOT . 'Temp/';

/*$visiFailai = scandir($dir);
print_r($visiFailai);*/

$visiFailai = array_slice(scandir($dir), 2);
//print_r($visiFailai);
$o = 0;
$IDs = array();
foreach ($visiFailai as $failas) {
    $file = file_get_contents($dir . $failas);
    /*echo"Kitas failas:\n";
    print_r($file);
    echo "\n";*/
    $json = json_decode($file, true);
    foreach ($json as $miestoID => $miestoRajonai) {
        $i = 0;
        $IDs[$o]['miestas'] = '';
        $IDs[$o]['id'] = $miestoID;
        $miestoInfo = array();
        foreach ($miestoRajonai as $Rajonas) {
            $miestoInfo[$i]['name'] = $Rajonas['name'];
            $miestoInfo[$i]['id'] = $Rajonas['id'];
            $i++;
        }
        $IDs[$o]['rajonai'] = $miestoInfo;
        $o++;
    }

}
echo "Miestai[] \n\n";
print_r($miestoInfo);

echo "IDs[]\n";
print_r($IDs);
/*
echo $file;

$json = json_decode($file, true);


$IDs = array();
foreach($json as $miestoID => $miestoRajonai){
    $i = 0;
    $IDs[$o]['miestas'] = '';
    $IDs[$o]['id'] = $miestoID;
    $miestoInfo = array();
    foreach ($miestoRajonai as $Rajonas){
        $miestoInfo[$i]['name'] = $Rajonas['name'];
        $miestoInfo[$i]['id'] = $Rajonas['id'];
        $i++;
    }
    $IDs[$o]['rajonai'] = $miestoInfo;
    $o++;
}

echo "Miestai[] \n\n";
print_r($miestoInfo);

echo "IDs[]\n";
print_r($IDs);
*/

/*foreach($json as $miestoID => $miestoRajonai){
    $i = 0;
    $IDs[$o]['miestas'] = '';
    $IDs[$o]['id'] = $miestoID;
    foreach ($miestoRajonai as $Rajonas){
        $miestai[$miestoID][$i]['name'] = $Rajonas['name'];
        $miestai[$miestoID][$i]['id'] = $Rajonas['id'];
        $i++;
    }
    $IDs[$o]['rajonai'] = $miestai[$miestoID];
    $o++;
}*/